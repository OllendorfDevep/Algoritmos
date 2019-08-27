let a = [4, 5, 1, 5, 7, 9]

console.log("El minimo es : " + getMin(a));
console.log("El maximo es : " + getMax(a));

function getMin(a) {

    let min = a[0]

    for (i = 0; i < a.length; i++){      
        if(a[i] < min) min = a[i]
    }

    return min;
}

function getMax(a) {

    let max = a[0]

    for (i = 0; i < a.length; i++){       
        if(a[i] > max) max = a[i]
    }

    return max;
}