//Escribir una función que reciba 2 arreglos de la misma longitud
//por parámetro y devuelva un nuevo arreglo que sea una combinación de ambos.
function combinacionarreglo(arreglo1: number[], arreglo2: number[]) {
  let sumaarreglos: any[] = new Array(arreglo1);
  for (let index = 0; index < arreglo1.length; index++) {
    sumaarreglos = arreglo1.concat(arreglo2);
  }
  console.log(sumaarreglos);
  return combinacionarreglo;
}
combinacionarreglo([10, 2, 5, 2, 2], [2, 2, 3, 2, 3]);