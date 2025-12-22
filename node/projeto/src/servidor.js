// quando estou executando uma aplicação que tem comunicação com rede, preciso declarar uma porta(porta padrão é a porta 80)
const porta = 3003

const express = require("express")
const app = express()
const bodyparser = require('body-parser')
const dados = require('./dados')

app.use(bodyparser.urlencoded( {extended: true} ))

app.get('/produtos', (req, resp, next )=>{
        resp.send(dados.getProdutos())
})// get é uma forma de requisição para algo

app.get('/produtos/:id', (req, resp, next) =>{
    resp.send(dados.getproduto(req.params.id))
})

app.post('/produtos', (req, resp, next) => {
    const produto = dados.SalvarProduto({
        nome: req.body.nome, 
        preco: req.body.preco
    })
    resp.send(produto) // JSON 
})

app.delete('/produtos/:id', (req,resp, next) =>{
    const produto = dados.excluirProduto(req.params.id)
    resp.send(produto)// JSON
})


app.listen(porta , () => {
    console.log(`servidor está executando executando na porta ${porta}.`)
})  
// caso a aplicacao seja reiniciada, meus dados serao resetados 