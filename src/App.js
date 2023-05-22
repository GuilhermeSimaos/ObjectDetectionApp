import React, {useState} from 'react';
import axios from 'axios';

function App(){
    const [data, setData] = useState();
    const [focusedButton, setFocusedButton] = useState('fetch');

    async function fetchData() {
        try{
            let response = await axios.get('https://objdetectionserver-production.up.railway.app:8000/api/data');
            setData(response.data);
            setFocusedButton('clear')
        }catch (error){
            console.error(error);
        }
    }

    function clearData() {
        setData(null);
        setFocusedButton('fetch');
    }

    // HTML components
    return (
        <div className="App">
            <button 
            className="fetch"
            onClick={fetchData}
            style={{display: focusedButton.match('fetch')? 'initial':'none'}}
            >Fetch Data</button>

            <div style={{
                paddingTop:"7em",
                color:"white",
                fontWeight:"bolder",
                fontSize:"3em"}}>
                {data ? <p>{data.message}</p> : <p>Loading...</p>}
            </div>

            <button 
            className="clear"
            onClick={clearData}
            style={{display: focusedButton.match('clear')? 'initial':'none'}}
            >Clear Data</button>
        </div>
    );
}

export default App;
