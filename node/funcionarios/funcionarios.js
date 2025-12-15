const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const chineses = f => f.pais === 'China'
const sexo = f => f.genero === 'F'
const menorsalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario? func: funcAtual
}
axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
    //Mulher chinesa com menor salário? 
    const func = funcionarios.filter(chineses).filter(sexo).reduce(menorsalario)
    console.log(func)
})

