/*Ejercicio 1:
Crear un documento html con 3 cuadrados que, al ser clickeados, cambien el color de fondo del documento. Cada cuadrado debera tener un color distinto.
*/

const back = document.getElementById("body");


const cajaUno = document.querySelector("#caja1");
    cajaUno.addEventListener("click", ()=>{
     back.style.backgroundColor = "red"
    })

const cajaDos = document.querySelector("#caja2");
    cajaDos.addEventListener("click", ()=>{
     back.style.backgroundColor = "blue"
    })

const cajaTres = document.querySelector("#caja3");
    cajaTres.addEventListener("click", ()=>{
     back.style.backgroundColor = "yellow"
    })
    
/*
Ejercicio 2: 

Programar un contador de caracteres para un textarea.

*/

function mostrar(value){
 let cantCarac =  value.length;
 console.log("cantidad de carracteres es de",cantCarac)
}


/*
Ejercicio 3:

Dado el siguiente array de alumnos utilizar los métodos de array vistos para generar un array con los alumnos aprobados. Se considera aprobado todo alumno que tenga una nota mayor o igual a 7.

*/


var alumnos = [

  {

    nombre: 'Juan Gomez',

    nota: 7

  }, {

    nombre: 'Pedro Rodriguez',

    nota: 4

  }, {

    nombre: 'Roxana García',

    nota: 8

  }, {

    nombre: 'Luciano Lopez',

    nota: 5

  }, {

    nombre: 'Fernanda Gimenez',

    nota: 6

  }, {

    nombre: 'Florencia Martinez',

    nota: 10

  }, {

    nombre: 'Raul Sanchez',

    nota: 7

  }, {

    nombre: 'Sandra Figueroa',

    nota: 8

  }

];


alumnos.map((x)=>{
 if(x.nota >= 7){
  console.log(`El alumno ${x.nombre} aprobo con ${x.nota}`);
 }
 }
)