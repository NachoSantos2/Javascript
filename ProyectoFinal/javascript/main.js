function reservarTurno() {
    // Obtener la celda seleccionada
    let selectedCell = document.querySelector('.selected');

    // Solicitar nombre y teléfono al usuario
    let nombre = prompt("Ingrese su nombre:");
    let telefono = prompt("Ingrese su número de teléfono:");

    // Verificar que se haya seleccionado una celda y que se hayan ingresado nombre y teléfono
    if (selectedCell && nombre && telefono) {
        // Agregar el nombre a la celda
        selectedCell.textContent = nombre;
        // Marcar la celda como reservada
        selectedCell.classList.add('reservado');
        // Quitar la clase 'selected'
        selectedCell.classList.remove('selected');
    } else {
        alert("Por favor, seleccione una celda y complete su nombre y teléfono.");
    }
}
/*
document.addEventListener('DOMContentLoaded', function() {
    // Agregar evento de clic a las celdas de clase 'horario'
    let horarios = document.querySelectorAll('.horario');

    horarios.forEach(function(horario) {
        horario.addEventListener('click', function() {
            // Remover la clase 'selected' de todas las celdas
            horarios.forEach(function(horario) {
                horario.classList.remove('selected');
            });

            // Agregar la clase 'selected' a la celda clicada
            horario.classList.add('selected');
        });
    });
});
*/

document.addEventListener('DOMContentLoaded', function() {
    let horarios = document.querySelectorAll('.horario');

    horarios.forEach(function(horario) {
        horario.addEventListener('click', function() {
            // Si la celda ya está seleccionada, deselecciónala
            if (horario.classList.contains('selected')) {
                horario.classList.remove('selected');
            } else {
                // Si no está seleccionada, deselecciona todas y selecciona esta
                horarios.forEach(function(otroHorario) {
                    otroHorario.classList.remove('selected');
                });
                horario.classList.add('selected');
            }
        });
    });
});

