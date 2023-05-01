const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", validarFormulario )

function validarFormulario(e){
    e.preventDefault(); 
    const rut = document.querySelector("#rut").value
    const numero = document.querySelector("#numero").value
    const nombre = document.querySelector("#nombre").value
    const apellidop = document.querySelector("#apellidop").value
    const apellidom = document.querySelector("#apellidom").value
    const profesion = document.querySelector("#profesion").value
    const edad = document.querySelector("#edad").value
    const email = document.querySelector("#email").value
    const fecha = document.querySelector("#fecha").value
    const comentario = document.querySelector("#comentario").value

    const respuesta =document.getElementById("respuesta");
    respuesta.textContent = `Datos Enviados: ${rut} , ${numero},${nombre},${apellidop},${apellidom},${profesion},${edad},${email},${comentario}`
}