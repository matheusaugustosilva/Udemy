const pai = {nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai)
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', enumerable: true, writable: false}, 
    idade: {value: 14, enumerable: true, writable: false}
})
console.log(filha2.nome)
filha2.nome = 'Carla' // Não é possível alterar os atributos de bia
console.log(`${filha2.nome} tem cor de cabelo ${filha2.corCabelo}`)

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`) // Vai testar se a chave pertence a filha2 ou vem de herança   
}

const filha3 = Object.create(pai, {
    nome: {value:'Matheus', writable: false, enumerable:true}, 
    idade: {value: 18, writable: false, enumerable: false}, 

})    
 
