//promise é algo que vou usar no futuro, uma promessa 
// Vou ter um valor associado que vai me dar um dado no futuro

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(3) // posso passar apenas um único valor 
})
/*Promise é uma function que recebe outra function
essa outra function recebe um paramêtro que também é 
funciotion*/

p.then(function(valor) { 
    console.log(valor)
})
/*Utilizo then para chamar minha promise
passando uma function e quando minha promise for cumprida, irei chamar o resultado*/

let promessa = new Promise((cumprirPromessa) => {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

promessa 
    .then((nome) => nome[0]) // Peguei o nome na posição 0
    .then(primeiro => primeiro[0]) //Aqui mexi no nome e peguei a primeira letra do nome 0
    .then( (letra) => console.log(letra))  // Aqui estou mostrando qual é a letra
     
//O retorno da promessa(cumprirPromessa) é chamado de resolve
