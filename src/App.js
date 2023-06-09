import React, {useRef, useEffect, useState} from 'react';
import axios from 'axios';

function App(){
    const videoRef = useRef()
    const photoRef = useRef()
    const [hasPhoto, setHasPhoto] = useState(false)
    const [cameraSettings, setCameraSettings] = useState(false)
    const [hideButton, setHideButton] = useState(false)

    // Get video input from the device
    const getVideo = () => {navigator.mediaDevices.getUserMedia({video: {}})
        .then(stream =>{
            setCameraSettings(stream.getVideoTracks()[0].getSettings());
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        }).catch(err =>{
            if(err.name === 'NotAllowedError')
                console.log('Permission denied for camera access.');
            else
                console.log(err);
        });
    };

    // Take photo from the current video stream
    const takePhoto = () => {
        // Define canvas with a high resolution
        let canvas = document.createElement('canvas');
        canvas.width = cameraSettings.width;
        canvas.height = cameraSettings.height;

        // Draw the photo on the canvas
        let ctx = canvas.getContext('2d');
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        // Converts to Blob and send to backend
        canvas.toBlob((blob) => {
            // Add in a formData
            const formData = new FormData();
            formData.append('image', blob, 'my-photo.jpg');

            // Use axios to post to endpoint
            axios.post('https://objdetectionserver-production.up.railway.app/post-photo', formData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log('Error sending image!!!', error);
            });
        });
        // Set a timer to ask for GET photo
        setTimeout(() => {
            getProcessedPhoto();
        }, 5000);
    };

    // Get processed photo from backend
    const getProcessedPhoto = () => {
        // Points to the endpoint specifying the response type
        axios.get('https://objdetectionserver-production.up.railway.app/get-processed-photo', {responseType: 'blob'})
        .then(response => {
            // Converts blob to file then read it
            const reader = new FileReader();
            reader.onload = () =>{
                const img = new Image();
                img.onload = () => {
                    // Draw image on canvas element
                    const canvas = photoRef.current;
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const context = canvas.getContext('2d');
                    context.drawImage(img, 0, 0);
                    setHasPhoto(true);
                };
                img.src = reader.result;  
            };
            reader.readAsDataURL(response.data);
            setHideButton(true);
        }).catch(error => {
            console.log(error);
        });
    }

    // Clear canvas from the taken photo
    const closePhoto = () =>{
        setHasPhoto(false);
        setHideButton(false);
        // Delete temporary files from backend
        const response = axios.delete('https://objdetectionserver-production.up.railway.app/delete-files');
        console.log(response);
    };

    useEffect(() => {getVideo();}, [videoRef]);

    // HTML components
    return (
        <div className="App">
            <div className="camera">
                <h1>Webcam</h1>
                <video ref={videoRef}></video>
            </div>
            <button hidden={hideButton} onClick={takePhoto}>Tirar Foto</button>
            <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
                <h1>Foto Processada</h1>
                <canvas ref={photoRef}></canvas>
                <button onClick={closePhoto}>Apagar Foto</button>
            </div>
        </div>
    );
}

export default App;
