
import { perguntas } from "./PerguntasRespostas-backup.js";
export const core = (_usuario) => {
    
    perguntas(_usuario);
//     let respostaEscolhida;
//     var selected = new Audio('selecionado.mp3');

//     const app = document.querySelector("#app");
    
//     let respostas = "";
//     let modal = `<div class="modalCorpo"><h5>tem certeza?</h5>
//     <div class="areaButton">
//     <button class="confirmar">Confirmar</button>
//     <button class="voltar">Voltar</button></button>
//     </div>
//     </div>`;
    
//     geraPerguntas(0)
//     function geraPerguntas (_indice) {
//         respostas = "";
//         if(_indice == 999){
//             setTimeout(()=> {
//                 location.reload();
//             },2000)
//         }
//         newPerguntas[_indice].respostas.forEach((item, i) => {
//             respostas += `<div class="resposta" data-resposta="${i + 1}"><div class="quest"><span class="indice"> ${i + 1} </span></div><div class="pergunta"> ${item}</div> </div>`;
            
//         })
//         //perguntas.shift();
//         app.style.opacity = 0;
//         transitions("#app", "fadeIn", 20)
//         app.innerHTML = `<div class="modalBackground">${modal}</div></div>
//         <div class="user">Jogador<br>${_usuario}</div>
//         <div class="">${newPerguntas[_indice].perguntas}</div>
//         <div class="respostas">${respostas}</div>
//         `
        
//     let minhasResposta = document.querySelectorAll(".resposta");
    
//     minhasResposta.forEach((e) => {
//         console.log(e.dataset.resposta);
//         e.addEventListener("click", (e) => {
//             selected.volume = 0.4;
//             selected.play();
//             apareceModal(true);
//             transitions(".modalBackground","fadeIn",40);
//             for (let i = 0; i < minhasResposta.length; i++) {
//                 minhasResposta[i].classList.remove("corretaCor")
//             }
//             clickResposta(e)
//         })
//     })
    
//     function clickResposta(e) {
        
//         switch (e.currentTarget.dataset.resposta) {
//             case '1':
//                 e.currentTarget.classList.add("corretaCor");
//                 respostaEscolhida = "1"
//                 break;
//                 case '2':
//                     e.currentTarget.classList.add("corretaCor");
//                     respostaEscolhida = "2"
//                 break;

//                 case '3':
//                     e.currentTarget.classList.add("corretaCor");
//                 respostaEscolhida = "3"
//                 break;
                
//                 case '4':
//                     e.currentTarget.classList.add("corretaCor");
//                     respostaEscolhida = "4"
//                     break;
//                     case '5':
//                         e.currentTarget.classList.add("corretaCor");
//                 respostaEscolhida = "5"
//                 break;
                
                
//                 default:
//                     break;
//                 }
                
                
//             }
//             const voltarGame = document.querySelector(".voltar");
//             voltarGame.addEventListener("click", () => {
//                 apareceModal(false);
//             });
//     const confirmar = document.querySelector(".confirmar");
//     confirmar.addEventListener("click", () => {
//         let teste = confirmarResposta(respostaEscolhida, perguntas[_indice].correta);
//         let chamaPergunta = parseInt(teste);
//         let limpaResposta = document.querySelector(".respostas");
//         limpaResposta.innerHTML = "";
//         setTimeout(()=> {
//             geraPerguntas(chamaPergunta);
//         },1000)
//     });
// }
    
    
//     const apareceModal = (_ativar) => {
//         let modalAtivo = document.querySelector(".modalBackground");
//         if (_ativar) {
//             modalAtivo.style.display = "block";
//             let estaCerto = new Audio("estacertodisto.mp3");
//             setTimeout(() => { estaCerto.play(); }, 500)
//         } else {
//             modalAtivo.style.display = "none";
//         }
//     }
}