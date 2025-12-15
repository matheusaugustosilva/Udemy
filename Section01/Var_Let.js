var numero = 2
{   var numero = 1 
    console.log('Para dentro = ' + numero)}

    console.log('para fora = ' + numero) //no caso de var ele n muda, estando dentro ou fora do bloco, ele irá ler o último

let num = 1
{   let num = 2 
    console.log('para dentro =  ' + num)}

    console.log('Para fora = ' + num)// o let se importa se está dentro do bloco ou não

function teste(){
    var y = 'teste'
    console.log(y)
}
//console.log(y) ERRO!!! pois a variável está dentro de uma função. Desta forma ela não consegue ser identificada por elementos fora dela  