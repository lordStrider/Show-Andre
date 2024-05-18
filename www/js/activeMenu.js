
import { transitions } from "./Transition.js";
import { custonMenu } from "./custonMenu.js";
export const ativaMenu = (_audio, _noDevice)=> {
    let config = document.querySelector("#config");
    let vaiVolta = false;
    config.addEventListener("click", ()=> {
        let agir = document.querySelector(".modalBackground");
        if(vaiVolta == false && agir.style.opacity < 1){
            agir.style.display = "block";
            let modataArea = document.querySelector(".modalCorpo");
            modataArea.style = `margin: 0 auto;
            margin-top: 5vh;
            width: 90%;
            min-height: 90vh;
            box-shadow: none;
            background: url(img/pergaminho-fundo.png) no-repeat;
            background-size: 100% 100%;`;
            modataArea.innerHTML =`
            <img src='img/pergaminho-top.png' class='imageTop'>
            <div class="titleMenu"><h2>AJUSTES</h2></div>
            ${custonMenu("Música","musica")}
            ${custonMenu("Volume","volume")}
            <div class="saida"> Sair </div>
            
            `;
            const controlAudio = (obj)=> {
                const minhaMusica = document.querySelector(".musica");
                minhaMusica.addEventListener("change", (e)=> {
                    let soundVolume = e.currentTarget.value /100;
                    if(_noDevice == undefined){
                        obj.setVolume(localStorage.getItem("volumeGlobal"))
                        obj.setVolume(soundVolume);
                        let soundControlVolume = localStorage.setItem("volumeGlobal",soundVolume);
                    } else {
                        obj.volume = localStorage.getItem("volumeGlobal")
                        obj.volume = soundVolume;
                        let soundControlVolume = localStorage.setItem("volumeGlobal",soundVolume);
                    }
                    console.log(e.currentTarget.value)
                })
            }
            controlAudio(_audio);
            transitions(".modalBackground","fadeIn",10);
            const saida = document.querySelector(".saida");
            saida.addEventListener("click",()=>{
                transitions(".modalBackground","fadeOut",10);
                vaiVolta = false;
                setTimeout(() => {
                    agir.style.display = "none";
                }, 1000);
            });
            vaiVolta = true;
        } else {
            transitions(".modalBackground","fadeOut",10);
            
            setTimeout(() => {
                agir.style.display = "none";
            }, 1000);
            vaiVolta = false;

        }
    });
    
  }
  