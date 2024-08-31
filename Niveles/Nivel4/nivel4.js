document.addEventListener('DOMContentLoaded', (event) => {
    const mario = document.getElementById('mario');
    const resetPosition = document.getElementById('flechaIzquierda');
    const botonGolpe = document.getElementById('botonGolpe');
    const botonPoder = document.getElementById('botonPoder');
    const flechaDerecha = document.getElementById('flechaDerecha');
    const gomba = document.getElementById('gomba'); // Asegúrate de definir 'gomba'

    // Funciones para el movimiento
    flechaIzquierda.addEventListener('click', () => {
        mario.classList.add('move-left');
    });

    botonGolpe.addEventListener('click', () => {
        const input = prompt("¿Elemento para la proteccion de la cabeza?");

        if (input === "casco") {
            gomba.src = '/imagenes/gomba_derrotado.gif'
            gomba.classList.add('transparent', 'translate-up');
            setTimeout(() => {

            
                window.location.href = '../../win_and_lose/Felicitaciones.html'
            }, 2000);

        } else {
            window.location.href = '../../win_and_lose/Perdiste.html';
        }
    });

    botonPoder.addEventListener('click', () => {
        mario.classList.add('up');
    });

    flechaDerecha.addEventListener('click', () => {
        mario.classList.add('move-right');
    });


    resetPosition.addEventListener('click', () => {
        mario.classList.remove('move-left', 'move-right', 'scale-up');
    });
    
});