// Funcionalidades de Ejericio 1
const ironman = document.querySelector(".ironman")
let clicks = 1
ironman.addEventListener("click", function(){
    clicks += 1
    if (clicks%2==0 ) {
        ironman.style.border = "2px solid red"
        
    } else {
        ironman.setAttribute("style", "border: 0")
    }
})

