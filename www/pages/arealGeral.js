
import { router } from "../router/router.js";
import { masterAudioControl } from "../masterAudioControl.js";
import { energiaQnt } from "../js/controleEnergy.js";
/**
 * 
 * @param {string} _usuario = String nome do usuario
 * @param {url} _url = URL base do servidor
 * @param {object} _state = objeto contendo dados das açoes à fazer
 */
export const areaGeral = (_usuario, _url, _state) => {
    let currentAudio = "";
    const usuario = localStorage.getItem("usuario");
    const app = document.querySelector("#app");
    const avatar = localStorage.getItem("avatar");
    let modal = `<div class="modalCorpo"><h5>tem certeza?</h5>
    <div class="areaButton">
    <button class="confirmar">Confirmar</button>
    <button class="voltar">Voltar</button></button>
    </div>
    </div>`
    let controlsBottom = `
    <div class="botton-area"><div class="marketButons" id="loja-1">
    <span class="aviso" data-aviso="1"></span>    
        <span class="subtitulo">Mercado</span>
    </div>
    <div class="marketButons" id="loja-2">
        <span class="aviso" data-aviso="2"></span>
        <span class="subtitulo">Templo</span>
    </div>
    <div class="marketButons" id="loja-3">
        <span class="aviso" data-aviso="3"></span>
        <span class="subtitulo">aventura</span>
    </div>`;
    const energyHud = `<div class="hudArea">
    <div class="status">
        <img src="img/icon-energi-2.png"><span class="energyValue">99/100</span>
    </div>
    <div class="status">
        <img src="img/dracma.png"><span class="coinValue">99/100</span>
    </div>
</div>`;
    app.innerHTML = `<div class="modalBackground">${modal}</div>
    <div class="headerPerfil"><div class="imgPerfil"><img src="${avatar}"></div><div class="user">${usuario}</div> ${energyHud}</div>
    ${controlsBottom}
    `;
    currentAudio = masterAudioControl("wombat-noises-audio-the-legend-of-narmer(chosic.com).mp3");
    if(navigator.platform == "Win32"){
        currentAudio.play();
        currentAudio.loop = true;
    } else {
        currentAudio.play({ numberOfLoops: 99 });
    }
    app.style.background = `url("img/telaGameInicial.jpg")`;
    app.style.backgroundSize = "cover";

    const buscaAcao = document.querySelectorAll(".marketButons");

    buscaAcao.forEach((item) => {
        item.addEventListener("click", (e) => {
            currentAudio.pause();
            const rota = e.currentTarget.innerText;
            router(rota);
        })
    });
    
    // .botton-area
    let menuNoFundo = document.querySelector(".botton-area");
    let headerPerfil = document.querySelector(".headerPerfil")
    menuNoFundo.style = `margin-top: ${window.innerHeight - (menuNoFundo.clientHeight + (headerPerfil.clientHeight / 1.3))}px;`;
    $( window ).resize(()=> {
        menuNoFundo.style = `margin-top: ${window.innerHeight - (menuNoFundo.clientHeight + (headerPerfil.clientHeight / 1.3))}px;`;
    })
    energiaQnt();
}