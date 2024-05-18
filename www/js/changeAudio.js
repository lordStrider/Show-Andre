export const changeAudio = (_audio) => {
    let plataforma = navigator.platform; 
    let source;
    if(plataforma != "Win32") {
       source = new Media(_audio);
       return source;
    } else {
        source = new Audio(_audio);
       return source;
    }
}