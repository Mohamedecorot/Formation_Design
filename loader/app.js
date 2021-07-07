const box = document.querySelector('.box');
const txt = document.querySelector('.txt');
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(reponse => {
        return reponse.json();
    })
    .then(data => {
        txt.innerHTML = data.body;
        loader.className += ' hidden';
    })
})