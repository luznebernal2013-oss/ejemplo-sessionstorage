function mostrarNombre() {
    const nombre = sessionStorage.getItem("nombre");
    const ciudad = sessionStorage.getItem("ciudad");
   
    if(nombre===null){
        document.getElementById("saludo").textContent = "No hay ningun nombre guardado.";


    } else {
    document.getElementById("saludo").textContent = "Hola, " + nombre + ", de " + ciudad;

 }
}

function borrar() {
 sessionStorage.removeItem("nombre", "ciudad");
 mostrarNombre()
 mostrarCiudad()
}
document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar").addEventListener("click", borrar);


