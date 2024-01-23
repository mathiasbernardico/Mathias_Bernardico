document.addEventListener("DOMContentLoaded", function () {


   //Calcular edad
    var fechaNacimiento = new Date('1998-07-01');
    var fechaActual = new Date();

    var edadEnMilisegundos = fechaActual - fechaNacimiento;
    var edadEnAnios = Math.floor(edadEnMilisegundos / (365.25 * 24 * 60 * 60 * 1000));

    document.getElementById('age').innerHTML = edadEnAnios;


});