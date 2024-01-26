const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', validateInput);

function validateInput() {
    const inputLength = validationInput.value.length;
    const requiredLength = parseInt(validationInput.dataset.length);

    validationInput.classList.remove('valid', 'invalid');

    if (inputLength === requiredLength) {
        validationInput.classList.add('valid');
    } else {
        validationInput.classList.add('invalid');
    }
}
