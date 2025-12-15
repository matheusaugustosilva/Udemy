console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log("Dentro de uma funçao")
    console.log(this === module.exports)
    console.log(this === exports)
    console.log(this === global)
    this.perigo = "ALERTA!"
    console.log(this.perigo)
}
logThis()
this.perigo = "Seguro"
console.log(module.exports)