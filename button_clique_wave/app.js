
    const btn = document.querySelector('.btn')
    const root = document.documentElement;

    btn.addEventListener('click', (e) => {

        console.log(e);

        const el = e.target;
        // pos sur x - decalage de l'element par rapport à la gauche
        let x = (e.clientX - el.offsetLeft) / el.offsetWidth;
        let y = (e.clientY - el.offsetTop) / el.offsetHeight;
        // console.log(e.clientX, el.offsetLeft, el.offsetWidth);

        root.style.setProperty('--wavecoord-x', x)
        root.style.setProperty('--wavecoord-y', y)

    })

