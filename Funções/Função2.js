function soma(a, b, c ){
    a = isNaN(a)? 1: a  // Se for um NaN recebe 1, se n recebe a
    b = b !== undefined? b:1 // Se for undefined recebe 1, se não recebe c(ponto ruim = pode receber string)
    c = c !== undefined? c:1
    return a + b + c
}
console.log(soma(1,2,3))
console.log(soma(1,5,7))

// Valores padrões ]

function soma2(a = 1, b = 1,  c = 1 ){
    return a + b + c
}
console.log(soma2(0, 0, 0)) -
console.log(soma2())
console.log(soma2(1, 5 , 8))