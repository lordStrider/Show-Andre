import { constantes } from "./constantes.js";
import { areaGeral } from "../pages/arealGeral.js";

export const loginInGame = (_audio)=> {
    
    const userName = document.querySelector("#usuario").value;
    const password = document.querySelector("#senha").value;
    var data = {
        'senha': password,
        'user_name': userName,
        'notify_token': localStorage.getItem("device_token")
    };
    $.ajax({
        url: constantes.url + "LoginMt.php",
        type: 'POST',
        data: data,
        crossDomain: true,
        success: function (response) {
            let resposta = JSON.parse(response);
                //let src =localStorage.setItem("avatar")
                if(resposta.success == "Autorizado") {
                    localStorage.setItem("pontuacao", resposta.pontuacao);
                    localStorage.setItem("coin", resposta.coin);
                    localStorage.setItem("avatar", resposta.avatar)
                    areaGeral(resposta.username,"src","imagemPerfil");
                } else {
                    alert(`Usuário ${resposta.username} ${resposta.success}`)
                }
                _audio.pause();
                _audio.currentTime = 0;
                
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}