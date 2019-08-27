//Hallar el minimo maximo de los valores procesados del arreglo

let a = [4, 5, 1, 5, 7, 9] //creo arreglo
let average = getAverage(a)

console.log(getAverage(a));
function getAverage(a){

    let suma = 0

    for(let i = 0 ; i < a.length ; i++){
        suma += a[i] 
    }

    return suma / a.length;
}

function getMinValue(){

    if(a.length == 0) return 0

    let min = a[0]
    let miIndex = 0
    
    for (i = 0; i < a.length; i++){      
        if(distanceToAverage(a[i]) < min){

            min = distanceToAverage(a[i])
            miIndex = i
        }    
    }
    return min;
}

function distanceToAverage(n){

    return Math.abs(n - average)

}