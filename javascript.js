const submitButton = document.querySelector(".createAccount");
const password = document.querySelector('#password');
const passwordConfirmed = document.querySelector('#confirmed_password');

submitButton.addEventListener('click', event => {
    if (passwordConfirmed !== password) {
        alert("Please match your password");
    }
})