//Hallar el minimo de los cuadrados de los valores de un arreglo

let a = [4, 5, 1, 5, 7, 9]

function getMin(a) {

    let min = a[0]

    if(a.length == 0) return 0;

    for (i = 0; i < a.length; i++){      
        if(square(a[i]) < min) min = square(a[i])
    }

    return min;
}

function getMax(a) {

    let max = a[0]

    for (i = 0; i < a.length; i++){       
        if(square(a[i]) > max) max = square(a[i])
    }

    return max;
}

function square(n){

    return n * n
}