const escolas = ['ESA', 'Espcex', 'EFOMM', 'AFA']
escolas.pop() //remove o último elemento
console.log(escolas)

escolas.push('ITA')
console.log(escolas)

escolas.shift() //remove o primeiro elemento
console.log(escolas)

escolas.unshift('IME') //Adiciona um elemento a partir do primeiro
console.log(escolas)

//adicionar splice

escolas.splice(2,0, 'Epcar', 'CN')
console.log(escolas)

//Remover a partir de splice
escolas.splice(3,1)
console.log(escolas)

const AlgumasEscolas = escolas.slice(2)
console.log(AlgumasEscolas)

const AlgumasEscolas2 = escolas.slice(1, 4) // Não irá pegar o 4 é como se fosse [1, 4[
console.log(AlgumasEscolas2)