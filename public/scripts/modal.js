export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper');
    // Pegar o botão cancel
    const modalCancelButton = document.querySelector(".buttons .button.grey")

    modalCancelButton.addEventListener("click", close)
    

    function open(){
        // Function para abrir modal
        modalWrapper.classList.add('active')
    }
    function close(){
        // Function para fechar modal
        modalWrapper.classList.remove('active')
    }

    return{
        open, 
        close
    }
}