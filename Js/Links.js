if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.onload = function() {
  window.scrollTo(0, 0);
};

 fetch('Header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
});

function cargarPestaña(Estructurales) {
    // La ruta combina la carpeta 'Content' con el nombre que le pases
    const ruta = `../Content/${Estructurales}.html`;

    fetch(ruta)
        .then(response => {
            if (!response.ok) throw new Error("Archivo no encontrado");
            return response.text();
        })
        .then(html => {
            // "main-content" debe ser el ID del div vacío en tu index.html
            document.getElementById('main-content').innerHTML = html;
            window.scrollTo(0, 0); // Opcional: subir al inicio al cambiar
        })
        .catch(error => console.error("Error cargando la sección:", error));
}

function cargarPestaña(Texto) {
    // La ruta combina la carpeta 'Content' con el nombre que le pases
    const ruta = `../Content/${Texto}.html`;

    fetch(ruta)
        .then(response => {
            if (!response.ok) throw new Error("Archivo no encontrado");
            return response.text();
        })
        .then(html => {
            // "main-content" debe ser el ID del div vacío en tu index.html
            document.getElementById('main-content').innerHTML = html;
            window.scrollTo(0, 0); // Opcional: subir al inicio al cambiar
        })
        .catch(error => console.error("Error cargando la sección:", error));
}

function cargarPestaña(Listas) {
    // La ruta combina la carpeta 'Content' con el nombre que le pases
    const ruta = `../Content/${Listas}.html`;

    fetch(ruta)
        .then(response => {
            if (!response.ok) throw new Error("Archivo no encontrado");
            return response.text();
        })
        .then(html => {
            // "main-content" debe ser el ID del div vacío en tu index.html
            document.getElementById('main-content').innerHTML = html;
            window.scrollTo(0, 0); // Opcional: subir al inicio al cambiar
        })
        .catch(error => console.error("Error cargando la sección:", error));
}

function cargarPestaña(Formularios) {
    // La ruta combina la carpeta 'Content' con el nombre que le pases
    const ruta = `../Content/${Formularios}.html`;

    fetch(ruta)
        .then(response => {
            if (!response.ok) throw new Error("Archivo no encontrado");
            return response.text();
        })
        .then(html => {
            // "main-content" debe ser el ID del div vacío en tu index.html
            document.getElementById('main-content').innerHTML = html;
            window.scrollTo(0, 0); // Opcional: subir al inicio al cambiar
        })
        .catch(error => console.error("Error cargando la sección:", error));
}


function cargarPestaña(Tablas) {
    // La ruta combina la carpeta 'Content' con el nombre que le pases
    const ruta = `../Content/${Tablas}.html`;

    fetch(ruta)
        .then(response => {
            if (!response.ok) throw new Error("Archivo no encontrado");
            return response.text();
        })
        .then(html => {
            // "main-content" debe ser el ID del div vacío en tu index.html
            document.getElementById('main-content').innerHTML = html;
            window.scrollTo(0, 0); // Opcional: subir al inicio al cambiar
        })
        .catch(error => console.error("Error cargando la sección:", error));
}
function cargarPestaña(Multimedia) {
    // La ruta combina la carpeta 'Content' con el nombre que le pases
    const ruta = `../Content/${Multimedia}.html`;

    fetch(ruta)
        .then(response => {
            if (!response.ok) throw new Error("Archivo no encontrado");
            return response.text();
        })
        .then(html => {
            // "main-content" debe ser el ID del div vacío en tu index.html
            document.getElementById('main-content').innerHTML = html;
            window.scrollTo(0, 0); // Opcional: subir al inicio al cambiar
        })
        .catch(error => console.error("Error cargando la sección:", error));
}


