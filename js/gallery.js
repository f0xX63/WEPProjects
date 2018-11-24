var photos = document.getElementsByClassName('box');
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".close-button");

const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider img');

const nextBtn = document.getElementById('nextBtn');
const previousBtn = document.getElementById('previousBtn');

var counter = 0;
const size = sliderImages[0].clientWidth;

closeBtn.addEventListener("click", function() {
    modal.classList.toggle("show-modal");
    counter = 0;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        toggleModal();
    }
});

function toggleModal() {
    modal.classList.toggle("show-modal");
}

for (let item in photos) {
    photos[item].onclick = function() {
        modal.classList.toggle("show-modal");
        alert('you clicked by photo');
        counter = 0;
    };
}

nextBtn.addEventListener('click', () => {
    if (counter === sliderImages.length - 1) {
        counter = -1;
    };
    slider.style.transition = 'transform 0.4s easy-in-out';
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

previousBtn.addEventListener('click', () => {
    if (counter === 0) {
        counter = sliderImages.length;
    }
    slider.style.transition = 'transform 0.4s easy-in-out';
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});