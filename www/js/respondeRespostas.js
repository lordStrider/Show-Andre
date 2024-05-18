import { changeAudio } from "./changeAudio.js";
import { masterAudioControl } from "../masterAudioControl.js";
let indice = 1;
export const confirmarResposta = (_respostaEscolhida,_correta, _indice,_url) =>{
    //const currentUrl = location.href + "/audios/";
    const apareceModal = (_ativar) => {
        let modalAtivo = document.querySelector(".modalBackground");
        if (_ativar) {
            modalAtivo.style.display = "block";
            setTimeout(() => { masterAudioControl("estacertodisto.mp3"); }, 500)
        } else {
            modalAtivo.style.display = "none";
        }
    }
        if (_respostaEscolhida == _correta) {
            masterAudioControl("certaresposta.mp3").play();
            apareceModal(false);
            return indice++;
        } else {
            masterAudioControl("voceerrou.mp3").play();
            apareceModal(false);
            return 999;
        }
        
}

