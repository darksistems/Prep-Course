// No cambies los nombres de las funciones.

const { join } = require("@11ty/eleventy/src/TemplatePath");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}//1


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var posicionFinal= array.length -1;
  return array[posicionFinal];
}//2


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}//3


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(i = 0 ; i < array.length ; i++){
    array[i] = array[i]+1;
  }
  return array;
}//4


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}//5


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}//6


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = palabras.join(' ');
  return frase;
}//7


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(i = 0 ; i < array.length ; i++){
    if(array[i] === elemento){
      return true;
      break;
    }
  }
  return false;
}//8


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (i = 0 ; i < numeros.length ; i++){
    suma = suma + numeros[i];
  }
  return suma;
}//9


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  for (i = 0 ; i < resultadosTest.length ; i++){
    suma = suma + resultadosTest[i];
  }
  return (suma/resultadosTest.length);
}//10


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mg = 0;
  for (i = 0 ; i < numeros.length ; i++){
    if(mg < numeros[i]){
      mg = numeros[i];
    }
  }
  return mg;
}//11


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  var plus = 1;
  if (arguments.length > 0){
  for (i = 0 ; i < arguments.length ; i++){
    plus = plus * arguments[i];
  }
  return plus;
}else{
  return 0;
}
}//12


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cat = 0;
  for (i = 0 ; i < arreglo.length ; i++){
    if(arreglo[i] > 18){
      cat++;

    }
  }
return cat;
}//13


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch (numeroDeDia){
    case 1:
      return "Es fin de semana";
      break;
    case 7:
       return "Es fin de semana";
       break;
    default:
      return "Es dia Laboral";
      break;      
  }
} //14


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numeroString = String(n);
  if (numeroString[0] == 9){
    return true;
  }else{
    return false;
  } 
}//15


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  for (i = 0 ; i < arreglo.length ; i++){
    if(arreglo[0] != arreglo [i]){
      return false;
      break;
    }
  }
  return true;
} //16


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var mesesRequeridos = [];
  var contmes = 0;
  for ( i = 0 ; i < array.length ; i++){
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      mesesRequeridos.push(array[i]);
      contmes++;
    }
  }
  if(contmes === 3){
    return mesesRequeridos;
  }else{
    return "No se encontraron los meses pedidos";
  }
}//17


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var numerosMayores100 = [];
  for (i = 0 ; i < array.length ; i++){
    if (array[i] > 100){
      numerosMayores100.push(array[i]);
    }
  }
  return numerosMayores100;
}//18


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
