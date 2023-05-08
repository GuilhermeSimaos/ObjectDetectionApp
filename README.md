# ObjectDetectionApp :atom_symbol: :eye:
## US

    This repository is responsible for holding the frontend files of the Object Detection Application made with React and Axios lib. The backend was made with Flask and OpenCV lib.

    If you want to check the backend files, here you go! [ObjectDetectionBackend](https://github.com/GuilhermeSimaos/ObjectDetectionApp.git)

### Structure

    The frontend methods used for the app to work are organized below:

    | Method              | Description                                                  |
    | ------------------- | ------------------------------------------------------------ |
    | getVideo()          | Responsible for identifying user's webcam input and prompting to allow usage. |
    | takePhoto()         | Responsible for taking a photo the moment it's called when clicking on the take photo button and sending it to backend, after a second it calls the getProcessedPhoto function. |
    | getProcessedPhoto() | Responsible for  getting the processed photo from the backend and drawing on the canvas html element |
    | closePhoto()        | Responsible for erasing canvas data and hiding title, canvas and button elements. |

### Behavior

    Initially, the user is prompted to allow usage of the webcam camera or video input, then the page it's loaded with 3 basic elements, a title, a video and a button. when the button is clicked, a photo is taken from the user's video input and send to the backend for processing, after a second it's returned a processed photo from the backend and drawn on the canvas, button is changed to 'erase' the photo it received. After clicking to close the photo, the canvas element is cleared of data and hidden alongside the title and close photo button. If the user desire, he can repeat this cycle as much as he wants. That's all folks. :smiley:



------



## PT-BR

    Este repositório é responsável por manter os arquivos frontend do Aplicativo de Detecção de Objetos feitos com React e Axios lib. O backend foi feito com Flask e OpenCV lib.

    Se você quiser verificar os arquivos de back-end, aqui está! [ObjectDetectionBackend](https://github.com/GuilhermeSimaos/ObjectDetectionApp.git)

### Estrutura

    Os métodos de front-end usados para o funcionamento do app estão organizados a seguir:



    | Método              | Descrição                                                    |
    | ------------------- | ------------------------------------------------------------ |
    | getVideo()          | Responsável por identificar a entrada da webcam do usuário e solicitar a permissão de uso. |
    | takePhoto()         | Responsável por tirar uma foto no momento em que é chamada ao clicar no botão tirar foto e enviar para o backend, após um segundo chama a função getProcessedPhoto. |
    | getProcessedPhoto() | Responsável por obter a foto processada do back-end e desenhar no elemento html da tela |
    | closePhoto()        | Responsável por apagar os dados da tela e ocultar os elementos de título, tela e botão. |

### Comportamento

    Inicialmente, o usuário é solicitado a permitir o uso da câmera da webcam ou entrada de vídeo, então a página é carregada com 3 elementos básicos, um título, um vídeo e um botão. quando o botão é clicado, uma foto é tirada da entrada de vídeo do usuário e enviada para o back-end para processamento, após um segundo é retornada uma foto processada do back-end e desenhada na tela, o botão é alterado para apagar a foto recebida. Depois de clicar para fechar a foto, o elemento da tela é limpo de dados e oculto ao lado do título e do botão fechar foto. Se o usuário desejar, pode repetir este ciclo quantas vezes quiser. Isso é tudo, pessoal. :smiley:
