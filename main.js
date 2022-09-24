import { core } from './Core.js';
window.addEventListener("load", () => {
    const login = ()=> {
        const telaLogin = document.querySelector("#app");
        telaLogin.innerHTML =`<div class="logoMarca">Show do Andre</div>
        <div class="areaLogin">
        <input id="usuario" type="text" placeholder="digite seu nome do jogador">
        <button id="salvar">Salvar</button>
    </div>
        
        </div>`;
    const salvar = document.querySelector("#salvar");
    salvar.addEventListener("click", ()=> {
        let usuario = document.querySelector("#usuario").value;
        if(usuario !="") {
            localStorage.setItem("usuario", usuario);
            core(usuario);
        } else {
            alert("O nome de usuario não pode estar vazio!")
        }
    })
        
    }
    login();
    
})