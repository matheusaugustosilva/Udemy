//Sem promisse 
const http = require('http')
const { toUpper } = require('lodash')

const getTurma = (letra, callback) => {
    let LetraM = toUpper(letra)
    const url = `http://files.cod3r.com.br/curso-js/turma${LetraM}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados =>{
            resultado += dados
        })

        res.on('end', ()=> {
            callback(JSON.parse(resultado))
        })
    })
}
let nomes = []
getTurma('a', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    
    getTurma('b', alunos =>{
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
        
    })

    getTurma('c', alunos => {
        nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
        console.log(nomes)
    })
})