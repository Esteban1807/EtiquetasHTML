 document.addEventListener("DOMContentLoaded", function () {
            const btnArriba = document.getElementById("btnArriba");
            const botonModo = document.getElementById("botonModo");

            // Función para actualizar el texto del botón según el modo
            function actualizarTextoBoton() {
                if (document.body.classList.contains("dark-mode")) {
                    botonModo.textContent = "Modo Claro";
                } else {
                    botonModo.textContent = "Modo Oscuro";
                }
            }

            // Verificar si el modo oscuro estaba activo previamente
            if (localStorage.getItem("modoOscuro") === "activo") {
                document.body.classList.add("dark-mode");
            }

            // Evento para cambiar entre el modo claro y oscuro
            if (botonModo) {
                actualizarTextoBoton(); // Llamamos a la función al inicio

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

            // Evento de desplazamiento para mostrar/ocultar el botón de subir
            window.addEventListener("scroll", function () {
                if (window.scrollY > 200) {
                    btnArriba.classList.add("mostrar");
                    btnArriba.style.display = "block"; // Mostrar el botón cuando se hace scroll hacia abajo
                } else {
                    btnArriba.classList.remove("mostrar");
                    btnArriba.style.display = "none"; // Ocultar el botón cuando se vuelve arriba
                }
            });

            // Evento para el botón "subir" cuando se hace clic
            if (btnArriba) {
                btnArriba.addEventListener("click", function () {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                });
            }
        });