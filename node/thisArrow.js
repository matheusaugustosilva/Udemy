//Diferentemente da funçao padrao, a fc arrow funciona de forma diferente com o this
const ArrowFunction = () => {
    console.log(this === global)
    console.log(this === module.exports)
    console.log(this === exports)
}
ArrowFunction()