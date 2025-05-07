// Reutilización del header
fetch('../Html/header.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        // ✅ Este código se ejecuta después de que el header esté insertado en el DOM
        const page = location.pathname.split("/").pop(); // productos.html, etc.
        const links = document.querySelectorAll("[data-page]");

        links.forEach(link => {
            const pageName = link.getAttribute("data-page") + ".html";
            if (page === pageName) {
                link.removeAttribute("href");
                link.classList.add("active");
            }
        });

        console.log('index.js conectado');
    })
    .catch(err => console.error('Error al cargar el header:', err));

window.abrirMenu = function () {
    document.getElementById('menuSlide').classList.add('abierto');
}

window.cerrarMenu = function () {
    document.getElementById('menuSlide').classList.remove('abierto');
}




