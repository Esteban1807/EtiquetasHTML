document.addEventListener("DOMContentLoaded", function () {

    const btnArriba = document.getElementById("btnArriba");
    const botonModo = document.getElementById("modoOscuro");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 200) {
            btnArriba.classList.add("mostrar");
        } else {
            btnArriba.classList.remove("mostrar");
        }

    });

    btnArriba.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    if (botonModo) {
        botonModo.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

});