// Documentación en el código de JavaScript

// Este archivo implementa un botón para "Volver al inicio" que aparece
// dinámicamente cuando el usuario hace scroll hacia abajo en la página.

// Escucha cuando el documento está completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // 1. Crear el botón dinámicamente
    const scrollToTopBtn = document.createElement("button"); // Crear un botón HTML
    scrollToTopBtn.innerText = "↑ Top"; // Texto del botón
    scrollToTopBtn.id = "scrollToTop"; // Asignar un ID al botón

    // 2. Estilizar el botón mediante CSS en línea
    scrollToTopBtn.style.position = "fixed"; // Fijar posición en la pantalla
    scrollToTopBtn.style.bottom = "20px"; // Ubicar en la esquina inferior derecha
    scrollToTopBtn.style.right = "20px";
    scrollToTopBtn.style.padding = "10px 15px"; // Tamaño del botón
    scrollToTopBtn.style.backgroundColor = "#1E3A8A"; // Color de fondo (azul oscuro)
    scrollToTopBtn.style.color = "white"; // Texto en blanco
    scrollToTopBtn.style.border = "none"; // Sin bordes
    scrollToTopBtn.style.borderRadius = "5px"; // Bordes redondeados
    scrollToTopBtn.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)"; // Sombra para darle profundidad
    scrollToTopBtn.style.cursor = "pointer"; // Cambiar el cursor al pasar sobre el botón
    scrollToTopBtn.style.display = "none"; // Ocultar el botón inicialmente
    scrollToTopBtn.style.zIndex = "1000"; // Asegurar que esté por encima de otros elementos

    // 3. Insertar el botón en el documento
    document.body.appendChild(scrollToTopBtn);

    // 4. Mostrar/ocultar el botón dependiendo del desplazamiento
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) { // Si el desplazamiento vertical es mayor a 200px
            scrollToTopBtn.style.display = "block"; // Mostrar el botón
        } else {
            scrollToTopBtn.style.display = "none"; // Ocultarlo si no
        }
    });

    // 5. Funcionalidad para volver al inicio al hacer clic
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0, // Desplazar al inicio de la página
            behavior: "smooth" // Movimiento suave al desplazarse
        });
    });
});
