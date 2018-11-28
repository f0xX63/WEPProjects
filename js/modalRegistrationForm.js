var emailModal = document.getElementById("modal-email-reg");
var loginModal = document.getElementById("modal-login-reg");
var nameModal = document.getElementById("modal-name-reg");
var surnameModal = document.getElementById("modal-surname-reg");
var passwordModal = document.getElementById("modal-password-reg");
var comfirePasswordModal = document.getElementById("modal-comfire-password-reg");
var birthdayModal = document.getElementById("modal-date-reg");
var countryModal = document.getElementById("select-box1");
var numberModal = document.getElementById("modal-phone-reg");
var cancelBtnModal = document.getElementById("cancel-registration-btn");

var closeBtn = document.querySelector(".close-button");
var modal = document.querySelector(".modal");


var emailErrorModal = document.getElementById("modal-email-error");
var loginErrorModal = document.getElementById("modal-login-error");
var nameErrorModal = document.getElementById("modal-name-error");
var surnameErrorModal = document.getElementById("modal-surname-error");
var passwordErrorModal = document.getElementById("modal-password-error");
var birthdayErrorModal = document.getElementById("modal-date-error");
var countryErrorModal = document.getElementById("select-box1");
var numberErrorModal = document.getElementById("modal-phone-error");

var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

closeBtn.addEventListener("click", function() {
    modal.classList.toggle("show-modal");
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        toggleModal();
    }
});

cancelBtnModal.addEventListener("click", function() {
    modal.classList.toggle("show-modal");
});

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function checkNewUser() {
    var flag = true;
    if (emailModal.value == '' || !emailRegexp.test(emailModal.value)) {
        emailModal.style.border = '1x solid red';
        emailErrorModal.textContent = '*E-mail is wrong';
        emailModal.focus();
        flag = false;
    }
    if (loginModal === '') {
        loginModal.style.border = '1x solid red';
        loginErrorModal.textContent = '*Input your login';
        loginModal.focus();
        flag = false;
    }
    if (nameModal === '') {
        nameModal.style.border = '1x solid red';
        nameErrorModal.textContent = '*Input your name';
        nameModal.focus();
        flag = false;
    }
    if (surnameModal === '') {
        surnameModal.style.border = '1x solid red';
        surnameErrorModal.textContent = '*Input your surname';
        surnameModal.focus();
        flag = false;
    }
    if (passwordModal.value == '' || passwordModal.value.length < 5) {
        passwordModal.style.border = '1x solid red';
        passwordErrorModal.textContent = '*Your password must contain at leasts 5 characters';
        passwordModal.focus();
        flag = false;
    }
    if (new Date(birthdayModal.value) > Date.getNow()) {
        birthdayModal.style.border = '1x solid red';
        birthdayErrorModal.textContent = '*Incorrect date birthday';
        birthdayModal.focus();
        flag = false;
    }
    if (new Date(birthdayModal.value) > Date.getNow()) {
        birthdayModal.style.border = '1x solid red';
        birthdayErrorModal.textContent = '*Incorrect date birthday';
        birthdayModal.focus();
        flag = false;
    }
    if (flag) {
        alert('Вы авторизовались, как пользователь ' + email.value);
        return true;
    } else {
        alert('Вы не можете авторизоваться!\nПроверьте правильность введенных данных.');
        return false;
    }
}