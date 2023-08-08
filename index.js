const gris = document.getElementById("gris");
console.log(gris)
const rojo = document.getElementById("rojo");
const marron = document.getElementById("marron");
const piel = document.getElementById("piel");
const celeste = document.getElementById("celeste");
const negro = document.getElementById("negro");
let isDrawing = false;
let currentColor = '#000000';

// gris.addEventListener("click", function() {

// });

// rojo.addEventListener("click", function() {
    
// });

// marron.addEventListener("click", function() {
    
// });

// piel.addEventListener("click", function() {
    
// });

// celeste.addEventListener("click", function() {
    
// });

// negro.addEventListener("click", function() {
    
// });


// Función para cambiar el color actual seleccionado por el usuario
gris.addEventListener('click', function () {
    currentColor = gris.value;
});

canvas.addEventListener('mousedown', function (event) {
    isDrawing = true;
    const mouseX = event.clientX - canvas.offsetLeft;
    const mouseY = event.clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY);
});

canvas.addEventListener('mousemove', function (event) {
    if (isDrawing) {
    const currentX = event.clientX - canvas.offsetLeft;
    const currentY = event.clientY - canvas.offsetTop;
    ctx.lineTo(currentX, currentY);
    ctx.strokeStyle = currentColor;
    ctx.stroke();
    }
});

canvas.addEventListener('mouseup', function () {
    isDrawing = false;
});

canvas.addEventListener('mouseout', function () {
    isDrawing = false;
});
