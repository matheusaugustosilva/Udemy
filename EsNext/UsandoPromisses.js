//com promisse 
const { getRandomValues } = require('crypto')
const http = require('http')
const { toUpper } = require('lodash')

const getTurma = letra => {
    let LetraM = toUpper(letra)
    const url = `http://files.cod3r.com.br/curso-js/turma${LetraM}.json`
    return new Promise((resolve, reject) => {
          http.get(url, res => {
                let resultado = ''
        
                res.on('data', dados =>{
                    resultado += dados
                })
        
                res.on('end', ()=> {
                    try{
                        resolve(JSON.parse(resultado))
                    }catch(e){
                        reject(e)
                    }
                })
            })
    })
}
let nomes = []
/*getTurma('a').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    
    getTurma('b').then(alunos =>{
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
        
    })

    getTurma('c').then(alunos => {
        nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
        console.log(nomes)
    })
})*/
Promise.all([getTurma('a'), getTurma('b'), getTurma('c')])
.then(turmas => [].concat(...turmas))
.then(alunos => alunos.map(aluno => aluno.nome))
.then(nomes => console.log(nomes))

//turma que não existe
getTurma("d").catch(e => console.log(e.message))