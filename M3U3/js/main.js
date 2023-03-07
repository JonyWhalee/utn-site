/*
Ejericio 1

Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

0 a 1000 metros = pie

1000 a 10000 metros = bicicleta

10000 a 30000 metros = colectivo

30000 a 100000 metros = auto

+100000 = avion

*/

let distancia = +(prompt(`Ingresa el numero con la distancia de su viaje:\n
                            1-  0 a 1000 metros
                            2-  1000 a 10000 metros
                            3-  10000 a 30000 metros 
                            4-  30000 a 100000 metros 
                            5-  +100000 `));

if(isNaN(distancia)){
  alert("Opcion incorrecta, debe ingresar un numero")
}else{
  switch(distancia){
    case 1:
      alert("Le recomendamos ir a su destino caminando");
      break;
    case 2:
      alert("Le recomendamos ir a su destino en bicicleta");
      break;
    case 3:
      alert("Le recomendamos ir a su destino en colectivo");
      break;
    case 4:
      alert("Le recomendamos ir a su destino en auto");
      break;
    case 5:
      alert("Le recomendamos ir a su destino en avion");
      break;
  }
}



/*
Ejericio 2

Crear el código que reciba como parámetro un array de números y devuelva el mayor.

*/

const numeros = [4, 6, 2, 45, 8, 9, 22];

let numeroMaximo = Math.max(...numeros);
console.log("El numero mas grande tu array es el siguiente", numeroMaximo)