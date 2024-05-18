import { router } from "../router/router.js";
import { masterAudioControl } from "../masterAudioControl.js";
export const templateMercado = ()=> {
    const usuario = localStorage.getItem("usuario")
    const avatar = localStorage.getItem("avatar")
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
    telaApp.style = `background: url("img/mercador.jpg") no-repeat center; background-size: cover;`;
    telaApp.innerHTML =`<div class="headerPerfil"><div class="imgPerfil"><img src=${avatar}></div><div class="user">${usuario}</div><div class="back-button" data-back="inicio"></div></div>`;
    let estiloHeader = document.querySelector(".headerPerfil");
    estiloHeader.style = styleHeader;

    //criando botão de voltar
    const backButton = document.querySelector(".back-button");
    masterAudioControl("frase-padrao-mercador.mp3").play();

    backButton.addEventListener("click", (e)=> {
        masterAudioControl("click-btn.mp3").play();
        setTimeout(() => {
                router(e.target.dataset.back);
        }, 500);
    })
}