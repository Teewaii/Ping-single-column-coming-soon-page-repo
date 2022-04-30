

const form = document.querySelector('#emailForm');
const emailInput = document.querySelector('#email');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmail();

});

function checkEmail() {

    const emailValue = emailInput.value.trim();

    if (emailValue.match(pattern)) {
        setSuccess(emailInput, 'Your email is valid');
    }

    else {

        setErrorFor(emailInput, 'invalid email');
    }
    if (emailValue === '') {
        setErrorFor(emailInput, 'please provide a valid email');
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccess(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control success';
}

function invalid(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control success';
}