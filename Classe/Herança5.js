console.log(typeof String)

String.prototype.reverse = function () {
    return this.split('').reverse().join('') //Para acessar em uma estrutura de Object, Array, String, etc preciso utilizar o this
}
// o primeiro reverse não significa nada, pois esse comando so existe para array 
//Split quebra a minha string em várias partes menores em forma de array e as separa 
//.reverse inverte a ordem do array 
//.join junta o array novamente
//TODOS ESSES SÃO FUNÇÕES 
console.log('Matheus'.reverse())// Ele reconhece que é uma string 

Array.prototype.first = function () {
    return this[0]
}
const array = [1,2,3,4,5]
console.log(array.first())
console.log(['a', 'b', 'c', 'd', 'e'].first())

String.prototype.toString = function(){
    return 'ERRO'
}
console.log('Matheus'.reverse()) // Não sobreescrever funções já definidas no escopo global, pois pode dar erros inmensuráveis