
import Modal from './modal.js'

const modal = Modal()

// Pegar o botão delete
const deleteButton = document.querySelectorAll(".actions .delete")
// Pegar o botão cancel
const modalCancelButton = document.querySelector(".buttons .button.grey")

deleteButton.forEach(button=>{
    // adicionar a 'escuta'
    button.addEventListener("click", (event)=>{
        // Abrir modal
        modal.open()
    })
})

modalCancelButton.addEventListener("click", ()=>{
    modal.close()
})


