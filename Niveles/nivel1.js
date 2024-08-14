document.addEventListener('DOMContentLoaded', (event) => {
    const mario = document.getElementById('mario');
    const resetPosition = document.getElementById('flechaIzquierda');
    const flechaDerecha = document.getElementById('flechaDerecha');
    const botonGolpe = document.getElementById('botonGolpe');
    const yoshi = document.getElementById('yoshi'); // Asegúrate de definir 'yoshi'

    // Funciones para el movimiento
    flechaIzquierda.addEventListener('click', () => {
        mario.classList.add('move-left');
    });

    flechaDerecha.addEventListener('click', () => {
        mario.classList.add('move-right');
    });

    botonGolpe.addEventListener('click', () => {
        const input = prompt("¿Elemento de seguridad para los ojos?");

        if (input === "gafas") {
            yoshi.classList.add('transparent', 'translate-up');

            window.location.href = '/Niveles/Segundo_nivel.html'

        } else {
            window.location.href = '/Index/index.html';
        }
    });


    resetPosition.addEventListener('click', () => {
        mario.classList.remove('move-left', 'move-right', 'scale-up');
    });
});
