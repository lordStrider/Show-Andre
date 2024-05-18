export const custonMenu  = (_titulo,_icon)=> {
    const iconList = [
        {"musica":`<i class="fa fa-music"></i>`},
        {"volume":`<i class="fa-solid fa-volume-high"></i>`},
    ];
    let rangeBar = `<input type="range" class="${_icon}">`;
    let controlBars;
    switch (_icon) {
        case "musica":
            return controlBars = `<div class="mybars"><span>${_titulo}</span></div><div class="custonBar">${iconList[0].musica} ${rangeBar}</div>`;
            break;
            case "volume":
                return controlBars = `<div class="mybars"><span>${_titulo}</span></div><div class="custonBar">${iconList[1].volume} ${rangeBar}</div>`;
            break;
    
        default:
            break;
    }

}