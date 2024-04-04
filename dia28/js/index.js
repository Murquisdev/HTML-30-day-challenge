const showDialog = document.querySelector("#show-dialog")

showDialog.addEventListener("click", function (){
    const windowToShow = document.querySelector("#windowToShow")
    windowToShow.showModal();
})
