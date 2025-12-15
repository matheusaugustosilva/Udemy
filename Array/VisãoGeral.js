let Aprovados = ['Bia', 'Carlos', 'Ana']
console.log(Aprovados[0])
console.log(Aprovados[1])
console.log(Aprovados[2])

Aprovados[3] = 'Paulo'

Aprovados.push('Leo') // Adiciona o elemento no último array

console.log(Aprovados[3])
console.log(Aprovados[4])

console.log(Aprovados.length) // Tamanho do array

Aprovados.sort() // Altera o array original
console.log(Aprovados)
console.log(Aprovados[0])

delete Aprovados[0] // Apenas delata o índice, n modifica o array
console.log(Aprovados)

Aprovados.splice(2, 2 , 'Elemento 1', 'Elemento 2') // pego o array dois e vou excluir 3 elementos depois dele e apos adcionar os próximos elementos
console.log(Aprovados)