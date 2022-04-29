function validateForm() {
    let inPut = document.forms['emailForm']['email'].value;
    if (inPut == ' ') {
        formAlert = document.querySelector('p').innerText = 'please provide a valid email address';
        return false;
    }
}