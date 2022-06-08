const slime = document.querySelector('.slime');
const sinalizador = document.querySelector('.sinalizador');

const jump = () => {
    slime.classList.add('jump');
    setTimeout(() => {
        slime.classList.remove('jump');
    }, 500);    
}

const loop = setInterval(() => {
    const sinalizadorPosition = sinalizador.offsetLeft;
    const slimePosition = +window.getComputedStyle(slime).bottom.replace('px', '');
    
    if(sinalizadorPosition <= 220 && slimePosition < 85){   

        sinalizador.style.animation = 'none';
        sinalizador.style.left = `${sinalizadorPosition}px`;    

        slime.style.animation = 'none';
        slime.style.bottom= `${slimePosition}px`;

        slime.src = './images/gameOver.png';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);     