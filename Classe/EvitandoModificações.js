const obj1 = Object.preventExtensions({
    nome: 'Matheus',
    idade:21,
    endereco: 123
})
Object.preventExtensions(obj1) //Impede de adicionar mais atributos ao objeto
obj1.rua = 'ABC'
console.log(obj1.rua)
obj1.nome = 'LARA'
delete obj1.idade // Ainda é possível alterar, só não é possível adcionar atributos seu 
console.log(Object.keys(obj1))
console.log(`Extensível: ${Object.isExtensible(obj1)}`)

const pessoa = {
    nome: 'Eduardo',
     cep: 111, 
     cpf: 222
}
Object.isSealed(pessoa)
pessoa.nome = 'Matheus'
pessoa.cep = 333
pessoa.cpf = 444
delete pessoa.nome 
pessoa.endereco = 123
console.log(pessoa)