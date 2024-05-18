import { confirmarResposta } from "./respondeRespostas.js"
import { transitions } from "./Transition.js"
import { embaralhador } from "./embaralhador.js";
import { changeAudio } from "./changeAudio.js";
import { constantes } from "./constantes.js";
import { masterAudioControl } from "../masterAudioControl.js";
import { contagemRegress } from "./contagemRegress.js";
import { energiaQnt } from "./controleEnergy.js";
export const perguntas = (_usuario, _src) => {
    const avatar = localStorage.getItem("avatar");
    let tema = "";
    var newPerguntas;
    $.ajax({
        url: constantes.url + 'BuscaPerguntas.php', // Altere para o URL correto do seu servidor
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            // A resposta JSON contém os dados das perguntas
            // console.log(data)
            newPerguntas = embaralhador(data);
            let respostaEscolhida;

            const app = document.querySelector("#app");

            let respostas = "";
            let modal = `<div class="modalCorpo"><h5>tem certeza?</h5>
    <div class="areaButton">
    <button class="confirmar">Confirmar</button>
    <button class="voltar">Voltar</button></button>
    </div>
    </div>`;

            geraPerguntas(0)
            function geraPerguntas(_indice) {
                respostas = "";
                if (_indice == 999) {
                    setTimeout(() => {
                        location.reload();
                    }, 2000)
                } else {

                    newPerguntas[_indice].respostas.split("|").forEach((item, i) => {
                        respostas += `<div class="resposta" data-resposta="${i + 1}"><div class="quest"><span class="indice"> ${i + 1} </span></div><div class="pergunta"> ${item}</div> </div>`;
                        
                    })
                
                    //perguntas.shift();
                app.style.opacity = 0;
                transitions("#app", "fadeIn", 20);

                app.innerHTML = `<div class="modalBackground">${modal}</div>
        <div class="headerPerfil-game">
                <div class="perg-head">
                        <div class="imgPerfil"><img src="${avatar}"></div>
                        <div class="user">${_usuario}</div>
                </div>
                <div class="perg-head-timer">
                        <div class="timer">
                            <div class="chronometro">
                            <span class="myTimer">30</span>
                            </div>
                        </div>
                </div>
                <div class="perg-head menu-btn">
                <div class="hudArea2"><img src="img/icon-energi-2.png"><span class="energyValue">100/100</span></div>
                </div>
                
                
        </div>
        <div class="perguntas">${newPerguntas[_indice].perguntas}</div>
        <div class="respostas">${respostas}</div>
        `;
        energiaQnt()
    }
                // contagem
                contagemRegress(true, 30);
                //musica inicial 

                let minhasResposta = document.querySelectorAll(".resposta");

                minhasResposta.forEach((e) => {
                   // console.log(e.dataset.resposta);
                    e.addEventListener("click", (e) => {
                        masterAudioControl("selecionado.mp3").play();
                        //selected.play();
                        let meuTimer =  document.querySelector(".myTimer").textContent;
                        apareceModal(true);
                        transitions(".modalBackground", "fadeIn", 40);
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
                    let teste = confirmarResposta(respostaEscolhida, newPerguntas[_indice].correta, "", _src);
                    let chamaPergunta = parseInt(teste);
                    let limpaResposta = document.querySelector(".respostas");
                    limpaResposta.innerHTML = "";
                    setTimeout(() => {
                        geraPerguntas(chamaPergunta);
                    }, 1000)
                });
            }


            const apareceModal = (_ativar) => {
                let modalAtivo = document.querySelector(".modalBackground");
                let meuTimer =  document.querySelector(".myTimer").textContent;
                if (_ativar) {
                    contagemRegress(false, parseInt(meuTimer))
                    modalAtivo.style.display = "block";
                    let estaCerto = masterAudioControl("estacertodisto.mp3").play();
                    setTimeout(() => { estaCerto }, 500)
                    
                } else {
                    contagemRegress(true, parseInt(meuTimer))
                    modalAtivo.style.display = "none";
                    modalAtivo.style.opacity = "0";
                }
            }
            // Agora você pode usar o array 'perguntas' conforme necessário
            //console.log(perguntas);
        },
        error: function (e, testStatus, error) {
            alert('Erro ao carregar perguntas.');
        }
    });
    tema = masterAudioControl("wisdom-of-the-mountains.mp3");
    tema.play();
    tema.loop = true;
    
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