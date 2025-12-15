const fs = require('fs')
const produto = {
    nome: "Celular",
    preco: 1299,
    desconto:  0.15
}
fs.writeFile(__dirname + '/arquivogerado.json', JSON.stringify(produto), (err) => {
    console.log(err || "Arquivo salvo")
})
// O arquivo /arquivogerado.json nao existe antes do codigo ser executado