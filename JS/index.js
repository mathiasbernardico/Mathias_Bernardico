document.addEventListener("DOMContentLoaded", function () {

    // Descripcion y imagen

    const a = document.getElementById('#a-Bio');

    a.addEventListener('click', function (event) {
        event.preventDefault();
        const div = document.getElementById('Bio');
        div.classList.add('show');
        div.style.opacity = '0'
        div.style.visibility = 'hidden'
        div.style.display = 'block';
        adjustContainerHeight();
        setTimeout(function () {
            div.style.opacity = '1'
            div.style.visibility = 'visible'
        }, 1100);

    });

    // Pantalla de carga

    const btn = document.getElementById('btn_index');
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        const loadingOverlay = document.getElementById('loadingOverlay');
        loadingOverlay.style.display = 'flex';
        setTimeout(function () {
            loadingOverlay.style.display = 'none';
            window.location = "home.html";
        }, 2000);
    });

    // Función para ajustar la altura del contenedor
    function adjustContainerHeight() {
        const div = document.getElementById('Bio');
        const newHeight = div.scrollHeight + 'px';
        div.style.height = newHeight;
    }

 
});
