import { router } from "../router/router.js";
import { masterAudioControl } from "../masterAudioControl.js";
import { pathCreator } from "../js/pathCreator.js";
const mapWorld = "game-map-test.jpg";
export const templateWorldMap = ()=> {
    const avatar = localStorage.getItem("avatar")
    const usuario = localStorage.getItem("usuario")
    const styleHeader = `
    width: 100%;
    display: block;
    overflow: auto;
    box-shadow: 0px -2px 5px black;
    background: rgba(0, 0, 0, 0.4);
    `;
    const telaApp = document.querySelector("#app");
    telaApp.innerHTML = "";
    $("#app").fadeIn(300);
    telaApp.style = `background: url(img/${mapWorld}) no-repeat; background-size: 100% 100%; background-position-x: right;
    }`;
    const mercadoTopo = `
    <div class="headerPerfil"><div class="imgPerfil"><img src="avatar"></div><div class="user">dfd</div></div>
    `;
    telaApp.innerHTML =`<div class="headerPerfil"><div class="imgPerfil"><img src=${avatar}></div><div class="user">${usuario}</div><div class="back-button" data-back="inicio"></div></div>`;
    let estiloHeader = document.querySelector(".headerPerfil");
    estiloHeader.style = styleHeader;
    pathCreator(telaApp);
     //criando botão de voltar
     const backButton = document.querySelector(".back-button");
     backButton.addEventListener("click", (e)=> {
         masterAudioControl("click-btn.mp3").play();
         setTimeout(() => {
            router(e.target.dataset.back);
    }, 500);
     });

     //trabalhando com canvas

     
}