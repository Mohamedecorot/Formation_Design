const text = document.querySelector('h2');


function getChrono() {
    const now = new Date().getTime();
    const countdownDate = new Date('May 31, 2021').getTime();

    // console.log(now, countdownDate);

    const diff = countdownDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(diff % (1000 * 60 * 60 ) / (1000 * 60 ));
    const seconds = Math.floor(diff % (1000 * 60 ) / (1000 ));
    console.log(days, hours, minutes, seconds);

    text.innerText = `${days}j ${hours}h ${minutes}min ${seconds}sec`;
}


const countDownInterval = setInterval(() => {
    getChrono();
}, 1000);