import './styles/index.scss';

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
