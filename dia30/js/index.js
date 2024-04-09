import {JSConfetti} from "./js-confetti.js" // importo la librería

// Selecciono el elemento a interaccionar
const confettiButton = document.querySelector("button")

//Añado los eventos
confettiButton.addEventListener("click", () => launchConfetti())

// Funcion
function launchConfetti (){
    const jsConfetti = new JSConfetti() // Creamos el confetti
    jsConfetti.addConfetti() //  Lanzamos el confetti
}