export function transitions(_target, _easy, _time) {
    let alvo = document.querySelector(_target);
    let defaultTime = 100;
    let opacity;
    switch (_easy) {
        case 'fadeIn':
            effect(0, alvo)
            break;
        case 'fadeOut':
            effect(1, alvo)
            break;

        default:
            break;
    }
    function effect(_valor, _alvo) {

        if (_time == undefined) {
            let timer = setInterval(() => {
                let valor = 0;
                if (_valor == 0) {
                        valor += 0.05;
                    _alvo.style.opacity = valor;
                    if (valor == 1) {
                       // clearIntervalo(timer)
                    }
                } else {
                    _valor -= 0.05
                    _alvo.style.opacity -= 0.05;
                    if (_valor == 0) {
                        clearIntervalo(timer)
                    }
                }

            }, defaultTime);
        } else {
            let valor = 0;
            let valorNeg = 1;
            let timer = setInterval(() => {
                if (_valor == 0) {
                    valor += 0.05;
                    _alvo.style.opacity = valor;
                    if (valor >= 1) {
                        clearIntervalo(timer)
                    }
                } else {
                    valorNeg -= 0.05;
                    _alvo.style.opacity = valorNeg;
                    if (valorNeg <= 0) {
                        clearIntervalo(timer)
                    }
                }
            }, _time);
        }
        function clearIntervalo(zera) {
            clearInterval(zera);
        }
    }

}