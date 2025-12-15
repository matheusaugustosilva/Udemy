const ferrari = {
    modelo: 'F40', 
    VelMax: 322, 
}
const volvo = {
    modelo: 'V40',
    VelMax: 200
}

console.log(ferrari.__proto__)// Mostra o objeto pai de Ferrari, que nesse caso ñ possui protótipo/ objeto pai
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
// Um objeto sempre recebe como padrão o atributo Object.prototype 
console.log(Object.prototype.__proto__)
// Nesse caso o atributo pai não possui nenhum valor, ou seja, null