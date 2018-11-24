var registrationBtn = document.querySelector("#btn-registration");
var modal = document.querySelector(".modal");

registrationBtn.addEventListener("click", function() {
    modal.classList.toggle("show-modal");
});

var email = document.querySelector('#user-email-input');
var password = document.querySelector('#user-password-input');

var signIn = document.querySelector("#sign-in");

var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var emailError = document.querySelector("#mail-error");
var passwordError = document.querySelector("#password-error");

function checkUser() {
    var flag = true;
    if (email.value == '' || !emailRegexp.test(email.value)) {
        email.style.border = '1x solid red';
        emailError.textContent = '*Email is wrong';
        email.focus();
        flag = false;
    }
    if (password.value == '') {
        password.style.border = '1x solid red';
        passwordError.textContent = '*Password is wrong';
        password.focus();
        flag = false;
    }
    if (flag) {
        alert('yes');
        return true;
    } else {
        alert('no');
        return false;
    }
}

email.onblur = function() {
    if (email.value == '' || !emailRegexp.test(email.value)) {
        email.style.border = '1px solid red';
        emailError.textContent = 'Email is wrong';
    } else if (email.value != '') {
        email.style.border = "1px solid black";
        emailError.innerHTML = '';
    }
};

password.onblur = function() {
    if (password.value == '') {
        password.style.border = '1px solid red';
        passwordError.textContent = 'Password is wrong';
    }
    if (password.value != '') {
        password.style.border = "1px solid black";
        passwordError.innerHTML = '';
    }
};

function emailVerify() {
    if (email.value != '') {
        email.style.border = "1px solid black";
        emailError.innerHTML = '';
        return true;
    }
}

function passwordVerify() {
    if (password.value != '') {
        password.style.border = "1px solid black";
        passwordError.innerHTML = '';
        return true;
    }
}