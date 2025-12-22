const tecnologias = new Map()
tecnologias.set('react', {freamework: false})
tecnologias.set('angular', {freamework: true})
console.log(tecnologias.get('react').freamework)

const chavesvariadas = new Map([
    [function () { }, 'Função'], 
    [{}, "Objeto"], 
    [123, "Número"]
])

chavesvariadas.forEach((valor, chave) =>{
    console.log(chave, valor)
})
console.log(chavesvariadas.has(123)) // olha se dentro de chaves variadas existe 123
chavesvariadas.delete(123)
console.log(chavesvariadas.has(123))
console.log(chavesvariadas.size)