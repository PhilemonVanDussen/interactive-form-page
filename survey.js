const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('passwords');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');
//     errorDisplay.innerText = message;
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// }


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {

        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);

    }
}

const setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small_
}