const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Genérica'
 produto.preco = 220

 console.log(produto)
 delete produto.preco 
 delete produto['Marca do produto']
 console.log(produto)

 const carro = {
    modelo: 'A4',
    preco: 89000, 
    proprietário: {
        nome: 'Matheus', 
        idade: 18,
        endereco: {
        cep:414132421, 
        bloco: 'Z',
        casa: 3, 
        }
    }, 
    condutores: [{
        nome: 'Luciano',
        idade: 45, 
    },
    {
        nome: 'Jaqueline',
        idade: 43
    },    
], 
    calcularValorSeguro: function(){
        //....
    }
 }
console.log(carro.proprietário.endereco)
 delete carro.proprietário.endereco.bloco
 console.log(carro.proprietário.endereco)
 console.log(carro.condutores)


 delete carro.modelo
console.log(carro.modelo)
 