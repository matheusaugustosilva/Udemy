const a = {}
a.name = 'teste'
a.preco = 21.99
a.desconto = 0.3 // exemplo de objeto



const b = a // o 'a' também muda pq está se tratando de um objeto 
                
b.name  = 'Opa'
console.log(b.name)
console.log(a.preco)

let valor // não foi inicializada e n definida
console.log(valor)
valor = null// ausência de valor, mas está definida
console.log(valor)

const z = {}
z.nome = 'Mathues'
console.log(z.preco)// o preco n foi definido
console.log(!!z.preco)

console.log(null == undefined)
console.log(null === undefined)


