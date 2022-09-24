import { confirmarResposta } from "./respondeRespostas.js"
export const core = (_usuario) => {

    let respostaEscolhida;
    var selected = new Audio('selecionado.mp3');

    const app = document.querySelector("#app");
    const perguntas = {
        titulo: 'Quais as duas datas que são comemoradas em novembro?',
        respostas: [
            'Independência do Brasil e Dia da Bandeira',
            'Proclamação da República e Dia Nacional da Consciência Negra',
            'Dia do Médico e Dia de São Lucas',
            'Dia de Finados e Dia Nacional do Livro',
            'Black Friday e Dia da Árvore',
        ],
        correta: '2'
    }
    let respostas = "";
    let modal = `<div class="modalCorpo"><h5>tem certeza?</h5>
    <div class="areaButton">
    <button class="confirmar">Confirmar</button>
    <button class="voltar">Voltar</button></button>
    </div>
    </div>`;
    perguntas.respostas.forEach((item, i) => {
        respostas += `<div class="resposta" data-resposta="${i + 1}"><div class="quest"><span class="indice"> ${i + 1} </span></div><div class="pergunta"> ${item}</div> </div>`;

    })
    app.innerHTML = `<div class="modalBackground">${modal}</div></div>
    <div class="user">Jogador<br>${_usuario}</div>
    <div class="titulo">${perguntas.titulo}</div>
    <div class="respostas">${respostas}</div>
    `
    let minhasResposta = document.querySelectorAll(".resposta");

    minhasResposta.forEach((e) => {
        console.log(e.dataset.resposta);
        e.addEventListener("click", (e) => {
            selected.volume = 0.4;
            selected.play();
            apareceModal(true);
            for (let i = 0; i < minhasResposta.length; i++) {
                minhasResposta[i].classList.remove("corretaCor")
            }
            clickResposta(e)
        })
    })
    
    function clickResposta(e) {

        switch (e.currentTarget.dataset.resposta) {
            case '1':
                e.currentTarget.classList.add("corretaCor");
                respostaEscolhida = "1"
                break;
            case '2':
                e.currentTarget.classList.add("corretaCor");
                respostaEscolhida = "2"
                break;

            case '3':
                e.currentTarget.classList.add("corretaCor");
                respostaEscolhida = "3"
                break;

            case '4':
                e.currentTarget.classList.add("corretaCor");
                respostaEscolhida = "4"
                break;
            case '5':
                e.currentTarget.classList.add("corretaCor");
                respostaEscolhida = "5"
                break;


            default:
                break;
        }


    }
    const voltarGame = document.querySelector(".voltar");
    voltarGame.addEventListener("click", () => {
        apareceModal(false);
    });
    const confirmar = document.querySelector(".confirmar");
    confirmar.addEventListener("click", () => {
        confirmarResposta(respostaEscolhida, perguntas.correta)
    });
        
    
    const apareceModal = (_ativar) => {
        let modalAtivo = document.querySelector(".modalBackground");
        if (_ativar) {
            modalAtivo.style.display = "block";
            let estaCerto = new Audio("estacertodisto.mp3");
            setTimeout(() => { estaCerto.play(); }, 500)
        } else {
            modalAtivo.style.display = "none";
        }
    }
}