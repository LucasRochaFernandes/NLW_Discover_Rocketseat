export default function Modal(){
    function open(){
        // Function para abrir modal
        document.querySelector('.modal-wrapper').classList.add('active')
    }
    function close(){
        // Function para fechar modal
        document.querySelector('.modal-wrapper').classList.remove('active')
    }

    return{
        open, 
        close
    }
}