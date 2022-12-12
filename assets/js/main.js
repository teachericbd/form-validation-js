let submit = document.querySelector('#submit');
let username = document.querySelector('#name');
let email = document.querySelector('#email');
let pass = document.querySelector('#pass');
let confirmPass = document.querySelector('#confirm-pass');

let errorTxt = document.querySelector('.error-text');
let nameError = document.querySelector('.name-error');
let emailError = document.querySelector('.email-error');
let passError = document.querySelector('.pass-error');
let confirmError = document.querySelector('.confirm-error');

submit.addEventListener('click', validation);

function validation(){
    
    // validation For Username Filds
    if(username.value != ""){
        username.classList.add('is-valid');
        username.classList.remove('is-invalid');
        nameError.textContent = "";
        nameError.classList.remove('text-danger');
    }
    else{
        username.classList.remove('is-valid');
        username.classList.add('is-invalid');
        nameError.textContent = "Username Fild is Required";
        nameError.classList.add('text-danger');
    }
    // validation For email Filds
    if(email.value != ""){
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
        emailError.textContent = "";
        emailError.classList.remove('text-danger');
    }
    else{
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        emailError.textContent = "Email Fild is Required";
        emailError.classList.add('text-danger');
    }
// validation For Password Filds
    if(pass.value != ""){
        pass.classList.add('is-valid');
        pass.classList.remove('is-invalid');
        passError.textContent = "";
        passError.classList.remove('text-danger');
    }
    else{
        pass.classList.remove('is-valid');
        pass.classList.add('is-invalid');
        passError.textContent = "Password Fild is Required";
        passError.classList.add('text-danger');
    }
// Validation For Confirm Password
    if(confirmPass.value != ""){
        confirmPass.classList.add('is-valid');
        confirmPass.classList.remove('is-invalid');
        confirmError.textContent = "";
        confirmError.classList.remove('text-danger');
    }
    else{
        confirmPass.classList.remove('is-valid');
        confirmPass.classList.add('is-invalid');
        confirmError.textContent = "Confirm Password Fild is Required";
        confirmError.classList.add('text-danger');
    }
    // Password validation
    if(pass.value != confirmPass.value){
        confirmPass.classList.remove('is-valid');
        confirmPass.classList.add('is-invalid');
        confirmError.textContent = "Confirm Password Not Match";
        confirmError.classList.add('text-danger');
    }
}
