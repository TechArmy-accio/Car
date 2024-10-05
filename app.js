const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');



let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

let player = {
    speed: 5,
    

}

// keys["ArrowUp"] = false;

startScreen.addEventListener("click", start)
document.addEventListener("keydown", keyPress)
document.addEventListener("keyup", keyRelease)



function keyPress(e){
   console.log("press", e.key)
   let pressedKey = e.key;
//    if(pressedKey == "ArrowUp" || pressedKey == "ArrowDown" || pressedKey == "ArrowLeft" || pressedKey == "ArrowRight"){ 
    if(pressedKey in keys){
    keys[pressedKey] = true;
    console.log(keys)
   }
}


function keyRelease(e){
    console.log("release", e.key)
    let releasedKey = e.key;
   if(releasedKey == "ArrowUp" || releasedKey == "ArrowDown" || releasedKey == "ArrowLeft" || releasedKey == "ArrowRight"){ 
    keys[releasedKey] = false;
    console.log(keys)
   }
}

function playGame(){
    //  console.log("I am playing")
     let car = document.querySelector(".car");
     let road = gameArea.getBoundingClientRect();
    //  console.log(road)
    //  console.log(player.x, player.y)
     // base condition 
     if(player.start == true){
       if(keys.ArrowUp == true && player.y >10){
             player.y -= player.speed;
       }
       if(keys.ArrowDown == true  && player.y < road.bottom -100){
                player.y += player.speed;
        }
        if(keys.ArrowLeft == true  && player.x > 0){
            player.x -= player.speed;
        }
        if(keys.ArrowRight == true && player.x < road.width-50){
            player.x += player.speed;
        }

        car.style.left = player.x + "px";
        car.style.top = player.y + "px";

      requestAnimationFrame(playGame)
     }
     
}



function start(){
    player.start = true;
    requestAnimationFrame(playGame)
    // console.log("start")
    startScreen.classList.add("hide");
    gameArea.classList.remove("hide");

    // lest create car: 

    let car = document.createElement("div");
    car.className = "car";
    car.innerText = "car";
    player.x = car.offsetLeft
    player.y = car.offsetTop
    gameArea.append(car);
}