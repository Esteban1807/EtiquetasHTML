document.addEventListener("DOMContentLoaded", function () {
    
    //  Persistencia del Modo Oscuro
    if (localStorage.getItem("modoOscuro") === "activo") {
        document.body.classList.add("dark-mode");
    }

    //  Control de visibilidad del botón "Subir"
    window.addEventListener("scroll", function () {
        const btnArriba = document.getElementById("btnArriba");
        if (btnArriba) {
            if (window.scrollY > 200) {
                btnArriba.classList.add("mostrar");
                btnArriba.style.display = "block";
            } else {
                btnArriba.classList.remove("mostrar");
                btnArriba.style.display = "none";
            }
        }
    });

    //  Delegación de eventos (Para elementos cargados dinámicamente)
    document.addEventListener('click', function (e) {
        // Lógica del botón "Subir"
        if (e.target && e.target.id === 'btnArriba') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Lógica del botón "Modo Oscuro"
        if (e.target && e.target.id === 'botonModo') {
            document.body.classList.toggle('dark-mode');
            
            const esOscuro = document.body.classList.contains("dark-mode");
            
            // Guardar en LocalStorage
            if (esOscuro) {
                localStorage.setItem("modoOscuro", "activo");
                e.target.textContent = "Modo Claro";
            } else {
                localStorage.removeItem("modoOscuro");
                e.target.textContent = "Modo Oscuro";
            }
        }
    });
});

// 1. Función para actualizar el preview de un editor específico
function actualizarPreview(editor) {
    const contenedor = editor.closest('.code-example');
    const preview = contenedor.querySelector('.preview-output');
    const tag = editor.getAttribute('data-tag'); // Obtenemos el nombre de la etiqueta (p, strong, etc.)
    
    if (preview) {
        // Aquí aplicamos las etiquetas fijas automáticamente
        preview.innerHTML = `<${tag}>${editor.value}</${tag}>`;
    }
}

// 2. Delegación de eventos para cuando el usuario escribe
document.addEventListener("input", function(e) {
    if (e.target && e.target.classList.contains("editor-input")) {
        actualizarPreview(e.target);
    }
});

// 3. ¡ESTO ES LO NUEVO! Función para activar todos los previews al cargar la sección
// Llama a esta función justo después de hacer el fetch de tu contenido
function inicializarTodosLosPreviews() {
    const editores = document.querySelectorAll('.editor-input');
    editores.forEach(editor => {
        actualizarPreview(editor);
    });
}


