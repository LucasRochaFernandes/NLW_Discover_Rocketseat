
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
    button.addEventListener("click", ()=>{

        // changing the mode's natural state to check
        modalTitle.innerHTML = "Marcar como lida"
        modalP.innerHTML = "Tem certeza que deseja marcar a pergunta como lida?"
        modalButton.innerHTML = "Sim, marcar"
        // Open modal 
        modal.open()
    })
})


// scroll through the delete buttons
deleteButton.forEach(button=>{
    // add the listen
    button.addEventListener("click", ()=>{
        // Open modal 
        modal.open()

})})


