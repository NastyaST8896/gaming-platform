import './styles/index.scss';
import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const Form = document.querySelector("#subscribe-form");
const Input = document.querySelector<HTMLInputElement>('#email');
const Modal = document.querySelector<HTMLDivElement>('#modal');
const CloseBtn = document.querySelector('#close');
const BurgerToggle = document.querySelector<HTMLInputElement>('#burger-toggle');
const Label = document.querySelector('#label');

document.querySelector('#copyright')
    .textContent = `${new Date().getFullYear()}`;

function hideModal() {
    Modal.style.animation = "slideOut 0.5s forwards";

    setTimeout(function () {
        Modal.style.animation = "";
        Modal.style.display = "none";
    }, 500);
}

Form.addEventListener("submit", e => {
    e.preventDefault();
    Input.value = "";
    Modal.style.animation = "slideIn 0.5s forwards";
    Modal.style.display = "block";

    setTimeout(hideModal, 5000);
});

CloseBtn.addEventListener("click", hideModal);

new Swiper('.swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },

    on: {
        init: (swiper) => {
            document.querySelector('#current').textContent = `${swiper.realIndex + 1}`;
            document.querySelector('#total').textContent = `${swiper.slides.length}`;
        },
        slideChange: function (swiper) {
            document.querySelector('#current').textContent = `${swiper.realIndex + 1}`;
        }
    }
});

BurgerToggle.addEventListener('change', (event) => {

    if ((event.target as HTMLInputElement).checked) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }
})