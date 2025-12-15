function soma(a, b){
    console.log(a + b)
}
soma(1, 2)
soma(2, 2 )
soma(2)
function somar(a , b = 0){
    return a + b
}
console.log(somar(1, 2))
console.log(somar(2, 2))
console.log(somar(2)) // mesmo sem declarar um dos valores, ele me da a soma(assumindo que o valor n estabelecido é 0   )
console.log(somar(1))
console.log(somar()) //NaN pq n passeio nenhum valor para o a

var soma = function(a,b){ //Armazenando uma função dentro de uma variável
    console.log(a + b)

} 
soma(1,2)

