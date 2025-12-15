const pessoa =  {
    nome: 'Ana',
    idade: 5,
    endereco:{

    rua: 'ABC',
    numero: 1000,

    } //tudo isso é um objeto com 3 prorpiedades(nome,idade,endereço
} 
var {nome, idade } = pessoa// jeito mais facil de puxar um objeto
console.log(nome,idade) // posso transformar o obj em variável para nao escreve-lo varias vezes


let {endereco: {rua, numero}} = pessoa
console.log(rua, numero)


console.log(pessoa.endereco.rua)// assim é preciso escrevar um objeto porm linha



var escola = {
    alunos: 1000,
    diretores: 10,
    professores: 20,
    funcionarios: 40,
    gastos: '1M',
    nota: 9,
    aprovados: '30%',
    generos: 'homens',
    mensalidade: '16k'


}
let {alunos: a, diretores: b, professores: c, funcionarios: d, gastos: e, nota: f, aprovados: g, generos: h, mensalidade: i} = escola
console.log(a,b,c,d,e,f,g,h,i)// daria um código muito maior se fosse escrever um de cada vez

