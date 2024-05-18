import { changeAudio } from "./js/changeAudio.js";

export const masterAudioControl = (_audioName,_state) => {
    let plataforma = navigator.platform;
    if (plataforma == "Win32") {

        const currentUrl = location.href + "audio/";
        const audioTema = changeAudio(`${currentUrl}${_audioName}`);
        audioTema.volume = localStorage.getItem("volumeGlobal")
            return audioTema
    } else {

        //let onDeviceReady = () => {
               let getFullMediaURL =cordova.file.applicationDirectory + 'www/audio/';
           // document.addEventListener("deviceready", onDeviceReady, false);
            let src = getFullMediaURL;
            var audioTema = changeAudio(src + _audioName);
            audioTema.setVolume = localStorage.getItem("volumeGlobal")
            return audioTema;
        }
    }