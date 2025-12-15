function soma(a, b){
    a = isNaN(a)? 1: a // se a for NaN, recebe 1, se não, recebe o valor de a
    b = isNaN(b)? 1: b
    return a + b
}

console.log(soma(1,2))
console.log(soma(5,6))
console.log(soma())
console.log(soma(0, 0 ))