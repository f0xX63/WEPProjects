var registrationBtn = document.getElementById('registration-btn');
var modal = document.querySelector(".modal");

registrationBtn.addEventListener("click", function() {
    modal.classList.toggle("show-modal");
});

var email = document.getElementById('signIn-email');
var password = document.getElementById('signIn-password');

var signIn = document.getElementById("signIn-btn");

var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var emailError = document.getElementById("signIn-email-error");
var passwordError = document.getElementById("signIn-password-error");

function checkUser() {
    var flag = true;
    if (email.value == '' || !emailRegexp.test(email.value)) {
        email.style.border = '1x solid red';
        emailError.textContent = '*E-mail is wrong';
        email.focus();
        flag = false;
    }
    if (password.value == '') {
        password.style.border = '1x solid red';
        passwordError.textContent = '*Input your password';
        password.focus();
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

email.onblur = function() {
    if (email.value == '' || !emailRegexp.test(email.value)) {
        email.style.border = '1px solid red';
        emailError.textContent = '*E-mail is wrong';
    } else if (email.value != '') {
        email.style.border = "1px solid black";
        emailError.innerHTML = '';
    }
};

password.onblur = function() {
    if (password.value == '') {
        password.style.border = '1px solid red';
        passwordError.textContent = '*Input your password';
    }
    if (password.value != '') {
        password.style.border = "1px solid black";
        passwordError.innerHTML = '';
    }
};