const yoda = document.querySelector('.yoda');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function  handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump();
        }
    }
}

function jump(){
    let upInterval = setInterval(() =>{
        if(position >= 150){
            clearInterval(upInterval); 
            let downInterval = setInterval(() =>{
                if(position <=0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    position -=20;
                    yoda.style.bottom = position + 'px';
                }                
            }, 20);
        }else{
            position += 20; 
            yoda.style.bottom = position + 'px';
        }
    },20);
}

function createVader(){
    const vader = document.createElement('div');
    let vaderPosition = 1000;
    let randomTime = Math.random() * 6000;
    vader.classList.add('vader');
    vader.style.left = 1000 + 'px';
    background.appendChild(vader);
    let leftInterval = setInterval(() =>{
        if(vaderPosition <-60){
            clearInterval(leftInterval);
            background.removeChild(vader);
        }else if(vaderPosition >0 && vaderPosition <60 && position <60){
            clearInterval(leftInterval);
            gameOver();
        }else {
            vaderPosition -=10;
            vader.style.left = vaderPosition + 'px';
        }
    },20);
    setTimeout(createVader, randomTime);
}

function gameOver(){
    const gameOver = document.body.innerHTML = '<div><h1 class="game-over"><img src="img/game-over.png" alt="game-over"><div>            <button class="btn-recomecar">Play Again</button></div></h1></div>';
    const button = document.getElementsByClassName('btn-recomecar');
}

createVader();
document.addEventListener('keyup', handleKeyUp);

