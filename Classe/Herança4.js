function MeuObjeto(){} // ISSO é uma função construtora
console.log(MeuObjeto.prototype) 

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(obj1.__proto__ === MeuObjeto.prototype)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function falar(){
    console.log(`Olá! Meu nome é ${this.nome}`)
}
obj1.falar()

obj2.nome = 'Matheus'
obj2.falar() // O this permitiu buscar o nome no menor escopo

//Exemplo de função construtora

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
    this.apresentar = function () {
        console.log( `Meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}
const gente1 = new Pessoa('Matheus', 18)
const gente2 = new Pessoa('Leo', 24)
gente1.apresentar()
gente2.apresentar()
