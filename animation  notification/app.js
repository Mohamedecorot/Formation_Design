const notif = document.querySelector('.notifications');
let countNotif = 0;

notif.addEventListener('click', () => {
    notif.classList.toggle('anim-notif')
    countNotif++;
    if(countNotif > 0){
        notif.style.backgroundPosition = 'right';
    }
})

notif.addEventListener('animationend', () => {
    notif.classList.toggle('anim-notif')
})