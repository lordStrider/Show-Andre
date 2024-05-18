import { perguntas } from "./js/PerguntasRespostas-backup.js"; 
import { transitions } from "./js/Transition.js";
import { changeAudio } from "./js/changeAudio.js";
import { loginGoogle,logout } from "./js/googleLogin.js";
import { ativaMenu } from "./js/activeMenu.js"; 
import { areaGeral } from "./pages/arealGeral.js";
import { loginInGame } from "./js/login.js";
import { cadastrarUsuario } from "./js/cadastrarUsuario.js";
let modal = `<div class="modalCorpo"><h5>tem certeza?</h5>
    <div class="areaButton">
    <button class="confirmar">Confirmar</button>
    <button class="voltar">Voltar</button></button>
    </div>
    </div>`;
    localStorage.setItem("avatar", "img/jesusavatar.jpg");
    let imagemPerfil= localStorage.getItem("avatar");
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    localStorage.setItem("volumeGlobal", "0.5");
    const currentUrl = "www/audio/turkish-beat-15167.mp3";
    function getFullMediaURL(s) {
        return cordova.file.applicationDirectory + 'www/audio/';
      }
        let src = getFullMediaURL();
        var audioTema = changeAudio(src + "turkish-beat-15167.mp3");
        audioTema.play({ numberOfLoops: 9999 });
        audioTema.setVolume('0.5');

    //const primeirPergunta = new Media(`${src}comecar.mp3`);
      
      
    function login() {
        const telaLogin = document.querySelector("#app");
        telaLogin.innerHTML = `<div class="modalBackground">${modal}</div></div><div class="logoMarca"><img src="img/bibleqiz.png" alt="logo"></div><div id="config"><i class="fa fa-cog" aria-hidden="true"></i></div>
        <div class="areaLogin">
        <div class="googlebutton" id="googlebutton"><i class="fa-brands fa-google"></i><span>Conecte com o google</span></div>
        <div class="googlebutton" id="cadastrarUser"><i class="fa fa-clipboard"></i></i><span>Cadastrar</span></div>
        <input id="usuario" type="text" placeholder="digite seu nome do jogador" autocomplete="off">
        <input id="senha" type="text" placeholder="digite sua senha" autocomplete="off">
        <input id="imageUrl" type="hidden">
        <button id="salvar">Acessar</button>
    </div>
        
        </div>`;
        const salvar = document.querySelector("#salvar");
        salvar.addEventListener("click", () => {
            
            let usuario = document.querySelector("#usuario").value;
            let imagemPerfil = document.querySelector("#imageUrl").value;
            localStorage.setItem("avatar",imagemPerfil);
            if (usuario != "") {
                localStorage.setItem("usuario", usuario);
                //perguntas(usuario,src,imagemPerfil);
                areaGeral(usuario,src,imagemPerfil);
                audioTema.pause();
                audioTema.currentTime = 0;
               // primeirPergunta.play();
                
            } else {
                alert("O nome de usuario não pode estar vazio!");
            }
        });
        ativaMenu(audioTema);
        const cadastrarUser = document.querySelector("#cadastrarUser");
        cadastrarUser.addEventListener("click", ()=>{
            cadastrarUsuario();
        })
    }
    login();
    // chama as credenciais do google 
    let googlebutton = document.querySelector("#googlebutton");
    googlebutton.addEventListener("click", ()=> {
        loginGoogle();
    })

    let googleLogout = document.querySelector("#googleLogout");
    googleLogout.addEventListener("click", ()=> {
        logout();
    })
}
window.addEventListener("load", () => {
    const currentUrl = location.href + "audio/";
    const audioTema = changeAudio(`${currentUrl}turkish-beat-15167.mp3`);
    //const primeirPergunta = new Audio(`${currentUrl}comecar.mp3`);
    const iniciaAudio = document.querySelector("body");
    // const ativaMenu = ()=> {
    //     let config = document.querySelector("#config");
    //     let vaiVolta = false;
    //     config.addEventListener("click", ()=> {
    //         let agir = document.querySelector(".modalBackground");
    //         if(vaiVolta == false){
    //             agir.style.display = "block";
    //             let modataArea = document.querySelector(".modalCorpo");
    //             modataArea.style = `margin: 0 auto;
    //             margin-top: 5vh;
    //             width: 90%;
    //             min-height: 90vh;
    //             box-shadow: none;
    //             background: url(img/pergaminho-fundo.png) no-repeat;
    //             background-size: 100% 100%;`;
    //             modataArea.innerHTML =`
    //             <img src='img/pergaminho-top.png' class='imageTop'>
    //             <img src='img/pergaminho-top.png' class='imageBottom'>
                
    //             `;
    //             transitions(".modalBackground","fadeIn",10);
    //             vaiVolta = true;
    //         } else {
    //             transitions(".modalBackground","fadeOut",10);
    //             setTimeout(() => {
    //                 agir.style.display = "none";
    //             }, 1000);
    //             vaiVolta = false;

    //         }
    //     })
    //   }
    let liberaTema = true;
    //iniciaAudio.addEventListener("click",()=> {
        if(liberaTema == true){
            liberaTema = false;
            audioTema.play();
            audioTema.loop = true;
        }
    //});
    
    
    function login() {
        const telaLogin = document.querySelector("#app");
        telaLogin.innerHTML = `<div class="modalBackground">${modal}</div></div><div class="logoMarca"><img src="img/bibleqiz.png" alt="logo"></div><div id="config"><i class="fa fa-cog" aria-hidden="true"></i></div>
        <div class="areaLogin">
        <div class="googlebutton"><i class="fa-brands fa-google"></i><span>Conecte com o google</span></div>
        <div class="googlebutton" id="cadastrarUser"><i class="fa fa-clipboard"></i></i><span>Cadastrar</span></div>
        <input id="usuario" type="text" placeholder="digite seu nome do jogador" autocomplete="off">
        <input id="senha" type="password" placeholder="digite sua senha" autocomplete="off">
        <button id="salvar">Conectar</button>
    </div>
        
        </div>`;
        const salvar = document.querySelector("#salvar");
       // const salvar = document.querySelector("#salvar");
        salvar.addEventListener("click", () => {
            loginInGame(audioTema)
            let usuario = document.querySelector("#usuario").value;
            if (usuario != "") {
                localStorage.setItem("usuario", usuario);
                //perguntas(usuario,currentUrl);
                //areaGeral(usuario,currentUrl);
                audioTema.pause();
                audioTema.currentTime = 0;
                //primeirPergunta.play();
                
            } else {
                alert("O nome de usuario não pode estar vazio!");
            }
        });
        ativaMenu(audioTema, true);
        const cadastrarUser = document.querySelector("#cadastrarUser");
        cadastrarUser.addEventListener("click", ()=>{
            cadastrarUsuario();
        })
    }
    login();
    
})