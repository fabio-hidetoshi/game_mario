const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const ButtonReset = document.querySelector('.buttom');
const audioGameOver = document.getElementById('lose');
const musicMario = document.getElementById('play');   
const marioJump = document.getElementById('jump');

marioJump.volume = 0.3

function playJump(){
    marioJump.play();
}

musicMario.volume = 0.1

function playMusic(){
    musicMario.pause();
}


function gameover(){
    audioGameOver.play();
    audioGameOver.volume = 0.1;
}


 const jump = () => {
    mario.classList.add('jump');
    playJump();


    setTimeout(() => {
        mario.classList.remove('jump');

    }, 500); 

}

 const loop = setInterval(() => {
    console.log('loop' )

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    console.log(marioPosition)

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`; 

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`; 
        playMusic();
        gameover();

        mario.src = './Imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        ButtonReset.classList.remove("reset")


        clearInterval(loop);
    }

}, 10)


 
 document.addEventListener('keydown', jump)

 ButtonReset.addEventListener('click', () => {
    location.reload()
})