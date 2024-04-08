// Selecciono los elementos a interaccionar
const tabSystem = document.querySelectorAll(".tabSystem li")
const content = document.querySelectorAll(".content")

//Añado los eventos
for(let i= 0; i < tabSystem.length; i++){
    tabSystem[i].addEventListener("click", () => active(tabSystem[i], i))
}

// Funciones
function hidden(){
    for(let i=0; i < tabSystem.length; i++){
        if(tabSystem[i].classList.contains("active")){
            tabSystem[i].classList.remove("active")
            content[i].setAttribute("hidden", "")
        }
    }
}
function active (element, iterator) { //Función que se ejecutará al hacer click en una pestaña
    hidden()
    if(!element.classList.contains("active")){
        element.classList.add("active")
        content[iterator].removeAttribute("hidden")
    }   
}