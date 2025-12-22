//for in funciona encima do índice
//for of funciona encima do valor

const assuntosEcma = ['Map', 'Set', 'Promiss']
for(let i in assuntosEcma){
    console.log(i)

    // Se quiser saber o valor, preciso trabalhar com o índice. EX: 
console.log(assuntosEcma[i])

}

for(let letra of 'Cod3r'){
    console.log(letra)
}
 
for(let assuntos of assuntosEcma){
    console.log(assuntos)
}

const asstuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado:true}],
    ['Promiss', {abordado:false}]
])

for(let assunto of asstuntosMap){
    console.log(assunto)
}

for(let chave of asstuntosMap.keys()){
    console.log(chave)
}

for(let valor of asstuntosMap.values()){
    console.log(valor)
}

for(let [ch,vl] of asstuntosMap.entries()){[
    console.log(ch,vl)
]}

const s = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra)
}