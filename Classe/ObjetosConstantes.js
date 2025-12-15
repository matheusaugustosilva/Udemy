const pessoa = {
    nome: 'Matheus',
    idade: 18
}
// pessoa -> 123 -> {...}
pessoa.nome = 'Lara'

//pessoa = {nome: 'ana'} ERRO, pois mudei a const

Object.freeze(pessoa)

pessoa.end = 'Rua abc'
delete pessoa.nome
pessoa.nome = 'João'
pessoa.idade = 13
console.log(pessoa) 
// resumindo, o objeto pessoa foi congelado, após a linha 10 ele não pode ser mudado em nenhum sentido de adcionar, excluir e alterar = OBJETO CONSTANTE 

const PessoaConstante = {}
Object.freeze(PessoaConstante)// o objeto é constante desde o início