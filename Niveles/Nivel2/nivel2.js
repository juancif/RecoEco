document.addEventListener('DOMContentLoaded', (event) => {
    const mario = document.getElementById('mario');
    const resetPosition = document.getElementById('flechaIzquierda');
    const flechaDerecha = document.getElementById('flechaDerecha');
    const botonGolpe = document.getElementById('botonGolpe');
    const gomba = document.getElementById('gomba'); // Asegúrate de definir 'gomba'

    // Funciones para el movimiento
    flechaIzquierda.addEventListener('click', () => {
        mario.classList.add('move-left');
    });

    flechaDerecha.addEventListener('click', () => {
        mario.classList.add('move-right');
    });

    botonGolpe.addEventListener('click', () => {
        const input = prompt("¿Curso que se requiere trabajos a mas de 2 metros?");

        if (input === "curso de alturas") {
            gomba.src = '../../imagenes/gomba_derrotado.gif'
            gomba.classList.add('transparent', 'translate-up');
            setTimeout(() => {

            
                window.location.href = '../../Niveles/Nivel3/Tercer_nivel.html'
            }, 2000);

        } else {
            window.location.href = '../../win_and_lose/Perdiste.html';
        }
    });


    resetPosition.addEventListener('click', () => {
        mario.classList.remove('move-left', 'move-right', 'scale-up');
    });
});
