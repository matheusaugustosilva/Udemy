const fs = require('fs') // fily sistemy ja esta instalado no node
const { json } = require('stream/consumers')

const caminho = __dirname + '/arquivo.json' // _dirname = variavel global que da o caminho absoluto de algo
// Sincono...
const conteudo = fs.readFileSync(caminho, "utf-8") // Como ele le o arquivo inteiro de forma sincrona, pode ser ruim para arquivos muito grandes
console.log(conteudo)

// Assincrono

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(config.db.host + ":" + config.db.porta)
})
// Nesse caso eu peguei o conteudo e transformei de JSON para obj e chamei o host e a porta do arquivo.json

const direta = require('./arquivo.json')
console.log(direta.db.Usario)
//Por conta de o arquivo ser json, posso chamar ele pelo caminho relativo

fs.readdir(__dirname, (err, arquivo) => {
    console.log("Conteudo da pasta")
    console.log(arquivo)
})