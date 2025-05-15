// cuando la pagina cargue por completo ejecuta el codigo que quita el loading
window.onload = function () {
    let cargando = document.querySelector(".centrado-cargando")
    cargando.classList.add("overflow");
    body = document.querySelector("body");
    body.classList.remove("overflow");

    html = document.querySelector("html").classList.remove("overflow");
};

// Dectetar si hay conexion o no
function comprobarConexion() {
    if (navigator.onLine) {
        document.querySelector(".conetendor-siin-wifi").classList.remove("activo");
        document.querySelector("body").classList.remove("overflow")
    } else {
        document.querySelector(".conetendor-siin-wifi").classList.add("activo");
        document.querySelector("body").classList.add("overflow")

    }
}

window.addEventListener("load", comprobarConexion);

// Escuchar cambios en la conexión
window.addEventListener("online", comprobarConexion);
window.addEventListener("offline", comprobarConexion);

comprobarConexion();