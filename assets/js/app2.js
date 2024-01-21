//Funcionalidades Ejercicio 2


const validar = document.querySelector("#button")
const resul = document.querySelector("#resultado")

validar.addEventListener("click", function(){
    let cantSticker1 = document.querySelector("#sticker1").value
    let cantSticker2 = document.querySelector("#sticker2").value
    let cantSticker3 = document.querySelector("#sticker3").value

    let total = parseInt(cantSticker1)+parseInt(cantSticker2)+parseInt(cantSticker3)

    if (total < 11) {
        resul.innerHTML = "Llevas "+ total +" sticker"
    } else {
        resul.innerHTML = "Llevas más de 10 sticker"
    }

})
