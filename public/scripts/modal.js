export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper'); //simplifcação de código, já que ele se repetia nsa duas funções

    const cancelButtons = document.querySelector(".button.cancel");
    cancelButtons.addEventListener("click", close);

    function open(){
        modalWrapper.classList.add("active");
    }
    function close() {
        modalWrapper.classList.remove("active");
    }

    return {
        open,
        close
    }
}