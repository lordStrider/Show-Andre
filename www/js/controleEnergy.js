export const energiaQnt = ()=> {
    let constroleEnergy = localStorage.getItem("pontuacao");
    let valorEnergya = document.querySelector(".energyValue");
    if(constroleEnergy == 0) {
        valorEnergya.innerHTML = "99/100";
    } else {
        valorEnergya.innerHTML = constroleEnergy;
    }
    let constroleCoin = localStorage.getItem("coin");
    let valorCoin = document.querySelector(".coinValue");
        valorCoin.innerHTML = constroleCoin;
}