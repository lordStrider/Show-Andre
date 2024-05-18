import { confirmarResposta } from "./respondeRespostas.js"
import { transitions } from "./Transition.js"
import { embaralhador } from "./embaralhador.js";
import { changeAudio } from "./changeAudio.js";
import { constantes } from "./constantes.js";
export const perguntas = (_usuario, _src, _config) => {
    var newPerguntas;
    $.ajax({
        url: constantes.url + 'BuscaPerguntas.php', // Altere para o URL correto do seu servidor
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // A resposta JSON contém os dados das perguntas
           // console.log(data)
            newPerguntas = embaralhador(data);
            let respostaEscolhida;
            let src;
    var selected = changeAudio(`${_src}click-for-game-menu-131903.mp3`);

    const app = document.querySelector("#app");
    
    let respostas = "";
    let modal = `
    <div class="modalCorpo"><h5>tem certeza?</h5>
    <div class="areaButton">
    <button class="confirmar">Confirmar</button>
    <button class="voltar">Voltar</button></button>
    </div>
    </div>`;
    
    geraPerguntas(0)
    function geraPerguntas (_indice) {
        respostas = "";
        if(_indice == 999){
            setTimeout(()=> {
                location.reload();
            },2000)
        }
        newPerguntas[_indice].respostas.split("|").forEach((item, i) => {
            respostas += `<div class="resposta" data-resposta="${i + 1}"><div class="quest"><span class="indice"> ${i + 1} </span></div><div class="pergunta"> ${item}</div> </div>`;
            
        })
        //perguntas.shift();
        app.style.opacity = 0;
        transitions("#app", "fadeIn", 20);
        if(_config == undefined){
            _config = "img/jesusavatar.jpg";
        }
        app.innerHTML = `<div class="modalBackground">${modal}</div>
        <div class="headerPerfil"><div class="imgPerfil"><img src="${_config}"></div><div class="user">${_usuario}</div></div>
        <div class="perguntas">${newPerguntas[_indice].perguntas}</div>
        <div class="respostas">${respostas}</div>
        `
        
    let minhasResposta = document.querySelectorAll(".resposta");
    
    minhasResposta.forEach((e) => {
        console.log(e.dataset.resposta);
        e.addEventListener("click", (e) => {
            selected.volume = localStorage.getItem("volumeGlobal");
            //selected.play();
            if(_config == true) {
                selected.play();
            } else {
                selected.pause();
            }
            apareceModal(true);
            transitions(".modalBackground","fadeIn",40);
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
                src = _src;
                break;
                case '2':
                    e.currentTarget.classList.add("corretaCor");
                    respostaEscolhida = "2"
                    src = _src;
                break;

                case '3':
                    e.currentTarget.classList.add("corretaCor");
                respostaEscolhida = "3"
                src = _src;
                break;
                
                case '4':
                    e.currentTarget.classList.add("corretaCor");
                    respostaEscolhida = "4"
                    src = _src;
                    break;
                    case '5':
                        e.currentTarget.classList.add("corretaCor");
                respostaEscolhida = "5"
                src = _src;
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
        let teste = confirmarResposta(respostaEscolhida, newPerguntas[_indice].correta,"",_src);
        let chamaPergunta = parseInt(teste);
        let limpaResposta = document.querySelector(".respostas");
        limpaResposta.innerHTML = "";
        // let modalBackground = document.querySelector(".modalBackground");
        // modalBackground.innerHTML = "";
        // modalBackground.style.display = "block";
        setTimeout(()=> {
            geraPerguntas(chamaPergunta);
        },1000)
    });
}
    
    
    const apareceModal = (_ativar) => {
        let modalAtivo = document.querySelector(".modalBackground");
        if (_ativar) {
            modalAtivo.style.display = "block";
            let estaCerto = changeAudio(_src + "estacertodisto.mp3");
            setTimeout(() => { estaCerto.play(); }, 500)
        } else {
            modalAtivo.style.display = "none";
        }
    }
            // Agora você pode usar o array 'perguntas' conforme necessário
            //console.log(perguntas);
        },
        error: function(e, testStatus,error) {
            alert('Erro ao carregar perguntas.');
        }
    });
}
// export const perguntas = [
//     {
//         titulo: 'Quais as duas datas que são comemoradas em novembro?',
//         respostas: [
//             'Independência do Brasil e Dia da Bandeira',
//             'Proclamação da República e Dia Nacional da Consciência Negra',
//             'Dia do Médico e Dia de São Lucas',
//             'Dia de Finados e Dia Nacional do Livro',
//         ],
//         correta: '2'
//     },
//     {
//         titulo: 'De onde é a invenção do chuveiro elétrico?',
//         respostas: [
//             'França',
//             'Inglaterra',
//             'Brasil',
//             'Australia',
//         ],
//         correta: '3'
//     },
//     {
//         titulo: 'Quais o menor e o maior país do mundo?',
//         respostas: [
//             'Vaticano e Rússia',
//             'Nauru e China',
//             'Mônaco e Canadá',
//             'Malta e Estados Unidos',
//         ],
//         correta: '1'
//     },
//     {
//         titulo: 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',
//         respostas: [
//             'Jânio Quadros',
//             'Jacinto Anjos',
//             'Getúlio Vargas',
//             'João Figueiredo',
//         ],
//         correta: '1'
//     },
//     {
//         titulo: 'Qual o livro mais vendido no mundo a seguir à Bíblia?',
//         respostas: [
//             'O Senhor dos Anéis',
//             'Dom Quixote',
//             'O Pequeno Príncipe',
//             'Ela, a Feiticeira',
//         ],
//         correta: '2'
//     },
//     {
//         titulo: 'Quantas casas decimais tem o número pi?',
//         respostas: [
//             'Duas',
//             'Centenas',
//             'Vinte',
//             'Infinitas',
//         ],
//         correta: '4'
//     },
//     {
//         titulo: 'Quais os países que têm a maior e a menor expectativa de vida do mundo?',
//         respostas: [
//             'Japão e Serra Leoa',
//             'Austrália e Afeganistão',
//             'Itália e Chade',
//             'Brasil e Congo',
//         ],
//         correta: '1'
//     },
//     {
//         titulo: 'O que a palavra legend significa em português?',
//         respostas: [
//             'Legenda',
//             'Conto',
//             'História',
//             'Lenda',
//         ],
//         correta: '4'
//     },
//     {
//         titulo: 'Qual a tradução da frase “Fabiano cogió su saco antes de salir”?',
//         respostas: [
//             'Fabiano coseu seu paletó antes de sair',
//             'Fabiano fechou o saco antes de sair',
//             'Fabiano pegou seu paletó antes de sair',
//             'Fabiano cortou o saco antes de cair',
//         ],
//         correta: '3'
//     },
//     {
//         titulo: '',
//         respostas: [
//             '',
//             '',
//             '',
//             '',
//         ],
//         correta: '1'
//     },
// ];