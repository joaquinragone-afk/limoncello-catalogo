document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todas las cartas con tu clase
    const cartas = document.querySelectorAll('.coctel-card-scene');

    cartas.forEach(carta => {
        carta.addEventListener('click', () => {
            // Le agrega o saca la clase 'girada' al hacer clic
            carta.classList.toggle('girada');
        });
    });
});