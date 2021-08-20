
import Modal from './modal.js'

const modal = Modal()

// Mapping the modal title, paragraph and the button
const modalTitle = document.querySelector(".modal h2")
const modalP = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")

// Catch the delete button 
const deleteButton = document.querySelectorAll(".actions .delete")

// Catch the check button
const checkButton = document.querySelectorAll(".actions .check")

// scroll through the check buttons
checkButton.forEach((button)=>{
    // add the listen
    button.addEventListener("click", (event)=>{
        event.preventDefault()
        // changing the mode's natural state to check
        modalTitle.innerHTML = "Marcar como lida"
        modalP.innerHTML = "Tem certeza que deseja marcar a pergunta como lida?"
        modalButton.innerHTML = "Sim, marcar"
        modalButton.classList.remove('red')

         handleForm(event, true)
        // Open modal 
        modal.open()
    })
})


// scroll through the delete buttons
deleteButton.forEach(button=>{
    // add the listen
    button.addEventListener("click", (event)=>{
        event.preventDefault()
        // changing the mode's natural state to check
        modalTitle.innerHTML = "Excluir pergunta"
        modalP.innerHTML = "Tem certeza que deseja excluir a pergunta?"
        modalButton.innerHTML = "Sim, excluir"
        modalButton.classList.add('red')

        handleForm(event, false)
        // Open modal 
        modal.open()

})})


 function handleForm(event, check){

    // Catch the modal form 
const formModal= document.querySelector(".modal form")
const roomId = document.querySelector("#room-id").dataset.id
const questionId = event.target.dataset.id;
// identify what is
const slug = check ? "check" : "delete"

formModal.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)
}


        async ()=>{
        const idCopy = document.querySelector("#room-id")
        await navigator.clipboard.writeText(idCopy);
        console.log("Copy")
        }

        