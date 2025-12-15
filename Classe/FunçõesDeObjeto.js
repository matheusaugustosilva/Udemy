const obj1 = {
    nome: 'Matheus', 
    idade: 18, 
    endereço: {
        rua: 'ABC', 
        casa: 14, 
        local: 'Brasília-DF'
    }
}
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1)) // Forma um array de chave e valor
Object.defineProperty(obj1, 'datadenascimento', {
    enumerable: false, 
    writable: false,
    value: '01/01/2019'
})
obj1.datadenascimento = '1/12/2020' 
console.log(obj1.datadenascimento)
console.log(Object.keys(obj1)) // como coloquei false no enumerable, ele não será listado nos objetos

const destino = { a: 2, b: 3}
const o1 = {c: 4}
const o2 = {a:10, d: 5}
Object.assign(destino, o1, o2) 
console.log(destino) 

