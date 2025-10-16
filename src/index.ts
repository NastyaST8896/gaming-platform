import './styles/index.scss';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Form = document.querySelector("#subscribe-form");
const Input = document.querySelector<HTMLInputElement>('#email');
const Modal = document.querySelector<HTMLDivElement>('#modal');
const CloseBtn = document.querySelector('#close') ;


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


const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

});