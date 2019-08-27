//Obtener el minimo / maximo - su indice

let a = [4, 5, 1, 5, 7, 9]

console.log(getMinIndex(a));
console.log(getMaxIndex(a));

function getMinIndex(a){

    if(a.length == 0) return 0 // Si el arreglo es 0 me devolvera 0

    let min = a[0]  //Declarop variable en la posicion 0
    let indice = 0
    
    for (i = 0; i < a.length; i++){     // Recorro el arreglo y obtener el minimo del arreglo
        if(a[i] < min){                 //al obtener un minimo lo actualizo para tener un nuevo minimo 

            min = a[i]                  //El minimo de mi arreglo l o almaceno en "min" 
            indice = i
        }    
    }
    return indice;
}

function getMaxIndex(a){

    let max = a[0]
    let indiceMax = 0
    
    for (i = 0; i < a.length; i++){      
        if(a[i] > max){

            max = a[i]
            indiceMax = i
        }    
    }
    return indiceMax;
}