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

//Recurso ES8
//Objetivo: Simplificar o uso do promisses

let obteralunos = async() => {
    const ta = await getTurma('a')
    const tb = await getTurma('b')
    const tc = await getTurma('c')
    return [].concat(ta,tb,tc)
}
obteralunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))