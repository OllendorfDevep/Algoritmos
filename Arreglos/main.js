//Halla las notas

let notas = [16, 17, 15, 13, 16, 20, 18, 11]

let b = [1, 5, 7, 4] // [16 - 20 - 11 - 16]

console.log(getMax(a))
console.log(getMax(a))

function getMin(a) {

    let min = nota(a[0])

    if (a.length == 0) return 0;

    for (let i = 0; i < a.length; i++) {
        if (nota(a[i]) < min) min = nota(a[i])
    }

    return min;
}

function getMax(a) {

    let max = nota(a[0])

    for (let i = 0; i < a.length; i++) {
        if (nota(a[i]) > max) max = nota(a[i])
    }

    return max;
}

function nota(n) {

    return notas[n]
}