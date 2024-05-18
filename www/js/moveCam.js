

export const moveMapa = ()=> {

  
  const moveCam = (_sprite, _end) => {
    let isDragging = false;
    let startY = 0;
    let moveY = 0;
  
    const canvas = document.querySelector("canvas");
  
    canvas.addEventListener("touchstart", (e) => {
      isDragging = true;
      startY = e.touches[0].clientY;
    });
  
    canvas.addEventListener("touchmove", (e) => {
      if (isDragging) {
        moveY = e.touches[0].clientY - startY;
        if(_sprite.image.attributes.src.nodeValue == "img/game-map-test.jpg") {

          if(_sprite.position.y >= 0 && moveY >= 0 ){
            moveY = 0;
          }
          if(_sprite.position.y <= _end && moveY < 0 ){
            moveY = 0;
          }
        }
        if(_sprite.image.attributes.src.nodeValue != "img/game-map-test.jpg") {
          //console.log(moveY)
          //console.log(`movendo imagem ${_sprite.image.attributes.src.nodeValue} posição ${_sprite.position.y} `)
          if(_sprite.position.y <= _end && moveY <= 0 ){
            //console.log("entrou 0")
            moveY = 0;
          }   
          if(_sprite.position.y >=  (_end + 977) && moveY >= 0 ){
            //console.log("entrou 0")
            moveY = 0;
          }     
        }
        _sprite.position.y += moveY * 1; // Adjust the factor for smoother movement
        startY = e.touches[0].clientY;
      }
    });
  
    canvas.addEventListener("touchend", () => {
      isDragging = false;
      moveY = 0;
    });
  }
  const renderMap = () => {
    
    const mycanvas = document.querySelector("canvas");
    const c = mycanvas.getContext("2d");
    mycanvas.width = window.innerWidth;
    mycanvas.height = window.innerHeight;
  c.fillStyle = "white";
  //Map mundo
  const mapWorld = "img/game-map-test.jpg";
  const image = new Image();
  image.src = mapWorld;
  
  //personagem
  const playerImg = new Image();
  playerImg.src = "img/mini-char.png";

  //const checkpoint 
  const checkpoint = new Image();
  checkpoint.src = "img/bible.png";
  console.log(checkpoint.height);
  class Sprite {
    constructor({ position, velocity, image }) {
      this.position = position
      this.image = image
    }
    draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }
  
  const background = new Sprite({
    position: {
      x: -390,
      y: -977
    },
    image: image
  });
  const myChar = new Sprite({
    position: {
      x: 150,
      y: 450
    },
    image: playerImg
  });

const baseCheckpoint = new Sprite({
  position: {
    x: 200,
    y: 460
  },
  image: checkpoint
});
  const animate = () => {
    
    /* aqui criamos as imagens antes de joga-las no canvas */
    background.draw();
    baseCheckpoint.draw();
    myChar.draw();
    const posiX = -100
    const posiY = -150
    const playerPosyX = 150;
    const playerPosyY = 500;
    /* ------------------------------------------------ */
    //myImagens()
    //c.drawImage(map, posiX, posiY);
    //c.drawImage(playerImg, playerPosyX, playerPosyY);
    window.requestAnimationFrame(animate);
  }
  moveCam(background, -977);
  moveCam(myChar,450);
  moveCam(baseCheckpoint,450);
  animate();
}
renderMap()
  }