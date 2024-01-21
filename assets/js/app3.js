const login = document.querySelector("#button")
const respuesta = document.querySelector("#resultado")

login.addEventListener("click", function(){
    let dig1 = document.querySelector("#Digito1").value
    let dig2 = document.querySelector("#Digito2").value
    let dig3 = document.querySelector("#Digito3").value

    let pass = dig1+dig2+dig3
    console.log(pass)

    if (pass == "911") {
        respuesta.innerHTML = "Password 1 Correcta"
    } else if(pass == "714"){
        respuesta.innerHTML = "Password 2 es Correcto"
    }else{
        respuesta.innerHTML = "Password Incorrecto"
    }

})