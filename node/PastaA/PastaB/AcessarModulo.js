const moduloA = require('../../moduloA') // '../' serve para sair da pasta que estou, se repetir esse processo, ele irá sair das pastas subsequentes
console.log(moduloA.bemvindo)
console.log(moduloA.atelogo)
const saudacao = require('saudacao')
console.log(saudacao.olá) // Não preciso colocar o caminho relativo, pois existe o arquivo chamado index.js dentro do node_modules
