const produtos = [
    {nome: 'Notebook', preco: 2199, fragil: true}, 
    {nome: 'Ipad', preco: 4199, fragil: true}, 
    {nome: 'Copo de plástico', preco: 18.45, fragil: false}, 
    {nome: 'Copo de Vidro', preco: 21.99, fragil: true},
    {nome: 'Dualsense', preco: 350, fragil: false}
]
const caro = produto => produto.preco >= 300
const quebrar = prod => prod.fragil
console.log(produtos.filter(caro).filter(quebrar))//É como um funil, o próximo filter vai diminuir 
//Exemplo 
console.log(produtos.filter(caro))
//Agora vou diminuir o filtro
console.log(produtos.filter(caro).filter(quebrar)) // O filtro foi diminuido

