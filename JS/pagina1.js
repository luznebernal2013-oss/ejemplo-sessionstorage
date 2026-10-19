function guardar(){

const nombre=document.getElementById("nombre").value;
const ciudad=document.getElementById("ciudad").value;

sessionStorage.setItem("nombre", nombre);
sessionStorage.setItem("ciudad", ciudad)
window.location.href= "pagina2.html";

}
document.getElementById("btn-guardar").addEventListener("click", guardar);

