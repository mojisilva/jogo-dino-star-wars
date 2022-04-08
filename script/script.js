const yoda = document.querySelector('.yoda');
const background = document.querySelector('.background');
const score = document.querySelector('.score');
let isJumping = false;
let position = 0;
let countScore = 0;


function startGame(){
    createVader();     
    document.addEventListener('keyup', handleKeyUp);
}
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
    let randomTime = Math.random() * 10000;     
    vader.classList.add('vader');
    vader.style.left = 1000 + 'px';
    background.appendChild(vader);
    let leftInterval = setInterval(() =>{
        if(vaderPosition <-60){
            clearInterval(leftInterval);
            background.removeChild(vader);
            countScore++;
            document.getElementById("score").textContent = countScore;
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
    const gameOver = document.body.innerHTML = '<div><h1 class="game-over"><img src="img/game-over.png" alt="game-over"><div><button class="btn-recomecar">Play Again</button></div></h1></div>';
    const button = document.getElementsByClassName('btn-recomecar');
    button[0].addEventListener('click', () =>{
        location.reload();
    })

} 

startGame();


