const sequence ={
        _id: 1,
        get id() {return this._id++}
}

const produtos = {}

function SalvarProduto(produto){
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}
function getproduto(id){
    return produtos[id] || {} // caso a posicao do id seja vaziak, ira retorar um valor nulo 
}
function getProdutos(){
    return Object.values(produtos) // todos os valores dentro do obj 'produtos'
}
function excluirProduto(id){
    const produto =  produtos[id]
    delete produtos[id]
    return produto
}
module.exports = {SalvarProduto, getproduto, getProdutos, excluirProduto} // deixei essas 3 funcoes visiveis para fora do modulo