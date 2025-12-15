function getPreco(imposto = 0, moeda = 'R$') {
     return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const prod = { 
    nome: 'TV', 
    preco: 4999, 
    desc: 0.1, 
    getPreco
}
global.preco = 200
global.desc = 0.1
console.log(getPreco()) // está pegando o valor global por conta do this que não está inserido em nenhum contexto
let precofinal = console.log(prod.getPreco())

const carro = {
    preco: 100000,
    desc: 0.05, 

}
console.log(getPreco.call(carro)) // O call chama a função e aplica no parâmetro escolhido
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.2, '$'])) //no apply o parâmetro precisa estar dentro de um array