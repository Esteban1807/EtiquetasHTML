document.addEventListener("DOMContentLoaded", function () {

    const btnArriba = document.getElementById("btnArriba");
    const botonModo = document.getElementById("modoOscuro");
    const navbar = document.querySelector("nav");


    window.addEventListener("scroll", function () {

        if (window.scrollY > 200) {
            btnArriba.classList.add("mostrar");
        } else {
            btnArriba.classList.remove("mostrar");
        }

        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add("nav-scroll");
            } else {
                navbar.classList.remove("nav-scroll");
            }
        }

    });

    if (btnArriba) {
        btnArriba.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    function actualizarTextoBoton() {
        if (document.body.classList.contains("dark-mode")) {
            botonModo.textContent = "Modo Claro ☀️";
        } else {
            botonModo.textContent = "Modo Oscuro 🌙";
        }
    }

    if (localStorage.getItem("modoOscuro") === "activo") {
        document.body.classList.add("dark-mode");
    }

    if (botonModo) {
        actualizarTextoBoton();

        botonModo.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("modoOscuro", "activo");
            } else {
                localStorage.removeItem("modoOscuro");
            }

            actualizarTextoBoton();
        });
    }

});