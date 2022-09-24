export const confirmarResposta = (_respostaEscolhida,_correta) =>{
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
        let certaResposta = new Audio("certaResposta.mp3")
        let voceErrou = new Audio("voceerrou.mp3")
        if (_respostaEscolhida == _correta) {
            certaResposta.play();
            apareceModal(false);
        } else {
            voceErrou.play();
            apareceModal(false);
        }
}
