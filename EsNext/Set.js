///não indexada
//não aceita repetição 
const times = new Set()
times.add("Vasco")
times.add("Flamengo").add("São Paulo").add("Botafogo")
times.add("Palmeiras")
times.add("Vasco")

console.log(times)
console.log(times.size)
console.log(times.has("Flamengo"))
console.log(times.has("flamengo"))
times.delete("Botafogo")
console.log(times)

nomes = ['Matheus', 'Lucas', 'Andre', 'Matheus']
nomesSet = new Set(nomes)
console.log(nomesSet) // Não aceita repetição 