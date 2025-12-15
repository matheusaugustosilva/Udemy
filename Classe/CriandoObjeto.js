// Notação literal 
const obj1 = {nome: 'Matheus'}
//obj1.nome = 'Matheus'
console.log(obj1)

// Object em JS
const obj2 = new Object
obj2.nome = 'Lara'
console.log(obj2)

// Função construtora

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco* (1-desc) // posso mexer e mostrar ele fora no getpreco e no nome mesmo fora da função 
    }
}
const p1 = new Produto('Tv', 2900, 0.1)
console.log(p1.getPrecoComDesconto())
p1.nome = 'notebook'
console.log(p1) // O nome eu posso mudar, pois ele está público, já o preço n
p1.preco = 100
console.log(p1.getPrecoComDesconto()) // Manteve o mesmo valor mas mudou o nome

// Function Factory 
function CriarFuncionario(nome, faltas, saláriobase){
    return{
        nome, 
        faltas,
        saláriobase,
        getSalário(){
            return (saláriobase/ 30) * (30- faltas)
                
            }
        }
    }
const f1 = CriarFuncionario('Matheus', 2, 1800)
const f2 = CriarFuncionario('Lara', 4, 7500)
console.log(f1.getSalário(), f2.getSalário())