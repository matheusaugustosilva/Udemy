

// callback no vs code
const fabricantes = ['Audi', 'Mercedes', 'BMW']

function ImprimirResultado(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
} 
fabricantes.forEach(ImprimirResultado)

fabricantes.forEach(fabricantes => console.log(fabricantes))


notas = [1,2,4,6,8,10,7,8,9,7.7] 
let NotasBaixas = []
NotasBaixas = notas.filter(nota => nota < 7 )
console.log(NotasBaixas)