import { router } from "../router/router.js";
import { masterAudioControl } from "../masterAudioControl.js";
import { perguntas } from "../js/PerguntasRespostas.js";
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
    telaApp.style = `background: url("img/map-eden.png") no-repeat center; background-size: cover;`;
    const mercadoTopo = `
    <div class="headerPerfil"><div class="imgPerfil"><img src="avatar"></div><div class="user">dfd</div></div>
    `;
    telaApp.innerHTML =`<div class="headerPerfil"><div class="imgPerfil"><img src=${avatar}></div><div class="user">${usuario}</div><div class="back-button" data-back="inicio"></div></div>
    <div class="game-map-area"></div>
    `;
    const criandoArea = [
        {
            "imgBg":["img/icon-path-1","img/path-4","img/path-1","img/path-1"],
            "textoTitulo":"d"
        },
        {
            "imgBg":["img/icon-path-1","img/path-4","img/path-1","img/path-1"],
            "textoTitulo":"c"
        },
        {
            "imgBg":["img/icon-path-1","img/path-4","img/path-1","img/path-1"],
            "textoTitulo":"b"
        },
        {
            "imgBg":["img/icon-path-1","img/path-4","img/path-1","img/path-1"],
            "textoTitulo":"a"
        },
    ];

    let conteudoAreas = "";
    let valorAltura = window.innerHeight / criandoArea.length -1;
    criandoArea.forEach((item)=> {
        let minhaImg = "";
        let largura = window.innerWidth / 64;
        let larguraColun = window.innerWidth / Math.round(largura);
        console.log(Math.round(largura));
        for(let i=0; i < Math.round(largura); i++) {
                if(i == 0) {
                    minhaImg += `<div class="colums meuPath" style="background:url(${item.imgBg[i]}.png) no-repeat center; width: ${larguraColun}px;" data-id="${item.textoTitulo + i}"></div>`;  
                } 
                if(i > 0 && i < Math.round(largura) - 1) {
                    minhaImg += `<div class="colums meuPath" style="background:url(img/icon-path-4.png) no-repeat center; width: ${larguraColun}px;" data-id="${item.textoTitulo + i}"></div>`; 
                }
                if(i == Math.round(largura)-1) {
                    minhaImg += `<div class="colums meuPath" style="background:url(${item.imgBg[0]}.png) no-repeat center; width: ${larguraColun}px;" data-id="${item.textoTitulo + i}">`;
                }
                
        }
       // console.log(minhaImg)
        conteudoAreas += `
        <div class="areaBase" style="height: ${valorAltura / 2 }px; margin: 10% 0px">
            <div class="areaTitulo"> <span>${item.textoTitulo}</span>
            </div>
        <div class="path-posi">${minhaImg}</div>
        </div>`
    })
    const geraArea = document.querySelector(".game-map-area");
    geraArea.innerHTML = conteudoAreas;

    let estiloHeader = document.querySelector(".headerPerfil");
    estiloHeader.style = styleHeader;
     //criando botão de voltar
     const backButton = document.querySelector(".back-button");
     backButton.addEventListener("click", (e)=> {
         masterAudioControl("click-btn.mp3").play();
         setTimeout(() => {
            router(e.target.dataset.back);
    }, 500);
     });

    let meuPath = document.querySelectorAll(".meuPath");
    meuPath.forEach((item)=> {
        item.addEventListener("click", (e)=> {
            //console.log(e.currentTarget.dataset.id);
            let usuarioN = localStorage.getItem("usuario")
            perguntas(usuarioN,"");
        })
    })

}