
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
    // Prevent form submission from reloading the page :D
    event.preventDefault();

    const emailInput = loginForm.elements['email'];
    const passwordInput = loginForm.elements['password'];


    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('Please fill in all fields.');
    }

    const formData = {
        email: emailInput.value,
        password: passwordInput.value
    };
    console.log(formData);

    // Clearing values after submission
    loginForm.reset();
});
