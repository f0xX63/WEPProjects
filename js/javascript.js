$(document).ready(function() {
    $(window).bind('scroll', function() {
        var logoHeight = $('logo').height();
        var headerHeight = $('header').height();
        var navHeight = logoHeight + headerHeight - 47;
        if ($(window).scrollTop() > navHeight) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });
});

var modal = document.querySelector(".modal");
var registrationBtn = document.querySelector("#btn-registration");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

registrationBtn.addEventListener("click", function() {
    modal.classList.toggle("show-modal");
});

closeButton.addEventListener("click", function() {
    modal.classList.toggle("show-modal");
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        toggleModal();
    }
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
        emailError.textContent = '*Email is wrong';
    } else if (email.value != '') {
        email.style.border = "1px solid black";
        emailError.innerHTML = '';
    }
};

password.onblur = function() {
    if (password.value == '') {
        password.style.border = '1px solid red';
        passwordError.textContent = '*Password is wrong';
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

var modalEmailError = document.querySelector("#modal-mail-error");
var modalPasswordError = document.querySelector("#modal-password-error");
var modalComfirePasswordError = document.querySelector("#modal-comfire-password-error");
var modalNameError = document.querySelector("#modal-name-error");

var modalEmailReg = document.querySelector("#modal-mail-reg");
var modalPasswordReg = document.querySelector("#modal-password-reg");
var modalComfirePasswordReg = document.querySelector("#modal-comfire-password-reg");
var modalNameReg = document.querySelector("#modal-name-reg");

// modalEmailReg.onblur = function() {
//     if (modalEmailReg.value == '' || !emailRegexp.test(modalEmailReg.value)) {
//         modalEmailReg.style.border = '1px solid red';
//         modalEmailError.textContent = '*Email is wrong';
//     } else if (modalEmailReg.value != '') {
//         modalEmailReg.style.border = "1px solid black";
//         modalEmailError.innerHTML = '';
//     }
// }

// var cancelModalBtn = document.querySelector("#cancel-registration-btn");
// cancelModalBtn.addEventListener("click", function() {
//     modal.classList.toggle("show-modal");
// });

$("select").on("click" , function() {
  
    $(this).parent(".select-box").toggleClass("open");
    
  });
  
  $(document).mouseup(function (e)
  {
      var container = $(".select-box");
  
      if (container.has(e.target).length === 0)
      {
          container.removeClass("open");
      }
  });
  
  
  $("select").on("change" , function() {
    
    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");
      
    label.find(".label-desc").html(selection);
      
  });