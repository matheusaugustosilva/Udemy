console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null // n importa colocar null, pois todos irão apontar para o mesmo objeto
console.log(module.exports)