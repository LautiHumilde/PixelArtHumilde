const gris = 0
const rojo = 1
const marron = 2
const piel = 3
const celeste = 4
const negro = 5

const imagenmario = [
    "#607d8b",
    "#d32f2e",
    "#d32f2e",
    "#d32f2e",
    "#d32f2e",
    "#d32f2e",
    "#607d8b",
    "#607d8b",
    "#607d8b",
    "#607d8b",
    "#d32f2e",
    "#d32f2e",
    "#d32f2e",
    "#d32f2e",
    "#d32f2e",
    "#d32f2e",
    "#d32f2e",
    "#d32f2e",
    "#d32f2e",
    "#607d8b",
    "#795547",
    "#795547",
    "#795547",
    "#ffe0b2",
    "#ffe0b2",
    "#000000",
    "#ffe0b2",
    "#607d8b",
    "#607d8b",
    "#607d8b",
    "#ffe0b2",
    "#795547",
    "#ffe0b2",
    "#ffe0b2",
    "#ffe0b2",
    "#000000",
    "#ffe0b2",
    "#ffe0b2",
    "#ffe0b2",
    "#607d8b",
    "#ffe0b2",
    "#795547",
    "#795547",
    "#ffe0b2",
    "#ffe0b2",
    "#ffe0b2",
    "#000000",
    "#ffe0b2",
    "#ffe0b2",
    "#ffe0b2",
    "#795547",
    "#ffe0b2",
    "#ffe0b2",
    "#ffe0b2",
    "#ffe0b2",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#607d8b",
    "#ffe0b2",
    "#ffe0b2",
    "#ffe0b2",
    "#ffe0b2",
    "#ffe0b2",
    "#ffe0b2",
    "#ffe0b2",
    "#ffe0b2",
    "#607d8b",
    "#607d8b",
    "#d32f2e",
    "#d32f2e",
    "#2196f3",
    "#d32f2e",
    "#d32f2e",
    "#d32f2e",
    "#d32f2e",
    "#607d8b",
    "#607d8b",
    "#607d8b",
    "#d32f2e",
    "#d32f2e",
    "#2196f3",
    "#d32f2e",
    "#d32f2e",
    "#2196f3",
    "#d32f2e",
    "#d32f2e",
    "#d32f2e",
    "#607d8b",
    "#d32f2e",
    "#d32f2e",
    "#2196f3",
    "#2196f3",
    "#2196f3",
    "#2196f3",
    "#d32f2e",
    "#d32f2e",
    "#d32f2e",
    "#d32f2e",
];

//let imagen = {
//    [ 0 , 1 , 1 , 1 , 1 , 1 , 0 , 0 , 0 , 0]
//    [ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 0]
//    [ 2 , 2 , 2 , 3 , 3 , 5 , 3 , 0 , 0 , 0]
//    [ 3 , 2 , 3 , 3 , 3 , 5 , 3 , 3 , 3 , 0]
//    [ 3 , 2 , 2 , 3 , 3 , 3 , 5 , 3 , 3 , 3]
//    [ 2 , 3 , 3 , 3 , 3 , 5 , 5 , 5 , 5 , 0]
//    [ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 0 , 0]
//    [ 1 , 1 , 4 , 1 , 1 , 1 , 1 , 0 , 0 , 0]
//    [ 1 , 1 , 4 , 1 , 1 , 4 , 1 , 1 , 1 , 0]
//    [ 1 , 1 , 4 , 4 , 4 , 4 , 1 , 1 , 1 , 1]
//}

let mariovacio = [];

// Obtén el contenedor de la grilla y la paleta
const grilla = document.getElementById("grid-container");
const palette = document.getElementById("color-palette");
const gridColors = [];

// Definimos una paleta de colores
const colors = [
    "#607d8b",
    "#d32f2e",
    "#795547",
    "#ffe0b2",
    "#2196f3",
    "#000000",
];