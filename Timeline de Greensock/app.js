const carte = document.querySelector('.card')
const img = document.querySelector('.card-img-top');
const titre5 = document.querySelector('.card-title');
const txt = document.querySelector('.card-text');
const cardBtn = document.querySelectorAll('.btnCard');
const btnPlay = document.querySelector('.btnPlay');
const btnPause = document.querySelector('.btnPause');
const btnReverse = document.querySelector('.btnReverse');

const TL1 = new TimelineMax({paused: true});

TL1
.from(carte,1,{opacity:0, x: -100})
.from(img,1,{scale:0})
.from(titre5, 0.6,{opacity:0, x:-100}, '-=0.4')
.from(txt, 0.6,{opacity:0, y: 100}, '-=0.4')
.staggerFrom(cardBtn, 0.5, {scale: 0})

btnPlay.addEventListener('click', () => {
    TL1.play();
})
btnPause.addEventListener('click', () => {
    TL1.pause();
})
btnReverse.addEventListener('click', () => {
    TL1.reverse();
})