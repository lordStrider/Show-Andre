export const pathCreator = (_alvo)=> {
    let area = [];
    for(let i=0; i < 20; i++){
       
        if(i % 5) {
            area.push( `<div class="check-point" data-id="${i}"></div>`);
        } else if(!(i % 5) || i == 0) {
            area.push( `<div class="my-point" data-id="${i}"></div>`);
        }
    }
    area.reverse().forEach((e)=>{
        _alvo.innerHTML += e;
    })
}