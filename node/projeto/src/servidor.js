// quando estou executando uma aplicação que tem comunicação com rede, preciso declarar uma porta(porta padrão é a porta 80)
const porta = 3003

const express = require("express")
const app = express()
app.get('/produtos', (req, resp, next )=>{
        resp.send({nome: "Notebook", preco: 123.45})
})// get é uma forma de requisição para algo
app.listen(porta , () => {
    console.log(`servidor está executando executando na porta ${porta}.`)
})  