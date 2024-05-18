let intervalo;

import { areaGeral } from "../pages/arealGeral.js";
export const contagemRegress = (_on, _contagem)=> {
    // Limpa o intervalo existente antes de iniciar um novo
    if (intervalo) {
        clearInterval(intervalo);
    }

    const myTimer = document.querySelector(".myTimer");
    let contador = _contagem;

    if (_on == true) {intervalo = setInterval(function() {
        myTimer.textContent = contador < 10 ? `0${contador}` : contador;
  
        if (contador <= 0) {
            clearInterval(intervalo);
           const usuario = localStorage.getItem("usuario");
                //perguntas(usuario,src,imagemPerfil);
                areaGeral(usuario,"src","imagemPerfil");
            // Aqui você pode adicionar qualquer lógica que desejar quando o contador chegar a zero
        }
  
        contador--;
    }, 1000);
  }
}
