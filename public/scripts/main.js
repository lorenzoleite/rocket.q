import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector(".modal h2"); //mapeamento do que queremos pegar
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

//Pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button => { //mesma variavel que deve ser colocada junto com o listener, pode ser qualquer nome
    //adicionar a escuta em cada botão, percorrendo todos
    button.addEventListener("click", handleClick); //quando um botão for clicado, o eventlistener vai estar escutando e no clique vai fazer a função open
});

const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false));
});

function handleClick(event, check = true) {
    event.preventDefault(); //previne o comportamento padrão de link, o # não aparece
    const text = check ? "Marcar como lida" : "Excluir";
    const slug = check ? "check" : "delete";

    const roomId = document.querySelector("#room-id").dataset.id;
    const questionId = event.target.dataset.id;

    const form = document.querySelector(".modal form");
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`);

    modalTitle.innerHTML = `${text}`;
    modalDescription.innerHTML = `Tem certeza que você deseja ${text.toLowerCase()} esta pergunta?`;
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red");

    modal.open();
}