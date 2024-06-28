"use strict"

//definimos las variables
let primerNumero, segundoNumero, tipoOperacion, resultado;

//Definimos una función para limpiar la pantalla
function limpiarPantalla(){

    pantalla.value = " ";

}

function marcarBoton(boton){

    pantalla.value = pantalla.value + boton;

}

//Definimos funcion para cambiar signo
function cambiarSigno(signo){
    
    pantalla.value = Number(pantalla.value) * -1;

}

//Definimos funcion para la operació
function operacion(op){

    primerNumero = Number(pantalla.value);
    tipoOperacion = Number(op);
    limpiarPantalla();

}

//Definimos una función para calcular la operación
function calcular(){

    segundoNumero = Number(pantalla.value);
    limpiarPantalla();
    
    switch (tipoOperacion){

        case 1: 
            resultado = primerNumero + segundoNumero;
        break;
        case 2: 
        resultado = primerNumero - segundoNumero;
        break;
        case 3: 
        resultado = primerNumero * segundoNumero;
        break;
        case 4: 
        resultado = primerNumero / segundoNumero;
        break;
        case 5: 
        resultado = Math.pow(primerNumero, segundoNumero);
        break;

    }

    pantalla.value = resultado.toFixed(2);

}

//Definimos una función para el porcentaje
function porcentaje(){

    segundoNumero = Number(pantalla.value);
    limpiarPantalla();
    resultado = primerNumero * (segundoNumero / 100)
    pantalla.value = resultado.toFixed(2);
}