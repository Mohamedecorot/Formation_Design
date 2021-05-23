const validationInput = document.querySelector('input');

validationInput.addEventListener('input', (e) => {
    if(e.target.value.length > 3) {
        validationInput.style.borderColor = "green";
    } else {
        validationInput.style.borderColor = "red";
    }
})