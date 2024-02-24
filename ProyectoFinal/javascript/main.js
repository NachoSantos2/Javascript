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




let docTitle = document.title;
window.addEventListener("blur",()=>{
    document.title = "Volve ☹️";
})
window.addEventListener("focus",()=>{
    document.title = docTitle;
})



// Array de raquetas
var raquetas = [
    { id: 1, marca: 'PaddleMaster', tipo: 'Profesional', precio: 129.99 },
    { id: 2, marca: 'SmashTech', tipo: 'Recreativa', precio: 59.99 },
    { id: 3, marca: 'SpeedyPaddle', tipo: 'Principiante', precio: 39.99 },
    // ... otras raquetas ...
];

// Función para mostrar el catálogo de raquetas
function mostrarCatalogo() {
    var catalogoDiv = document.getElementById('catalogoRaquetas');
    var html = '<h2>Catálogo de Raquetas</h2><ul>';

    // Itera sobre el array y crea elementos de lista para cada raqueta
    raquetas.forEach(function(raqueta) {
        html += '<li>';
        html += '<strong>Marca:</strong> ' + raqueta.marca + ', ';
        html += '<strong>Tipo:</strong> ' + raqueta.tipo + ', ';
        html += '<strong>Precio:</strong> $' + raqueta.precio.toFixed(2);
        html += '</li>';
    });

    html += '</ul>';
    catalogoDiv.innerHTML = html;
}

// Llama a la función para mostrar el catálogo al cargar la página
window.onload = mostrarCatalogo;



function toggleMenu() {
    var listaDesplegable = document.querySelector('.lista-desplegable');
    listaDesplegable.style.display = (listaDesplegable.style.display === 'none' || listaDesplegable.style.display === '') ? 'flex' : 'none';
}
