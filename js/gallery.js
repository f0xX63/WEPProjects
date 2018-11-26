var photos = document.getElementsByClassName('box');
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".close-button");

const slider = document.querySelector('.slider');
const sliderImages = Array.prototype.slice.call(document.querySelectorAll('.slider img'));

const nextBtn = document.getElementById('nextBtn');
const previousBtn = document.getElementById('previousBtn');

var counter = 0;
const size = sliderImages[0].clientWidth;


closeBtn.addEventListener("click", function() {
    modal.classList.toggle("show-modal");
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
    photos[item].onclick = function(event) {
        modal.classList.toggle("show-modal");
        var currentPhoto = event.currentTarget.firstElementChild.firstElementChild;
        counter = sliderImages.findIndex(item => item.src === currentPhoto.src);
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
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