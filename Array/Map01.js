const contas = [1,2,3,4,5]

let resultado = contas.map(function(fatorM){
    return fatorM* 2
})
console.log(resultado)

const carrinho = [
    '{"nome": "Caderno", "preco": 13.5}',
      '{"nome": "Borracha", "preco": 4.50}'
]
const Converter = json => {
    return JSON.parse(json)
}
const ApenasDinheiro = produto=> produto.preco
const res = carrinho.map(Converter).map(function SODIN(prod){
    return prod.preco
})
console.log(res)

const palavras = carrinho.map(Converter).map(function pal (nomes    ){
    return nomes.nome
})
console.log(palavras)