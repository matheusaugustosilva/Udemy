const contadorA = require('./InstanciaUnica')
const contadorB = require('./InstanciaUnica')

const contadorC = require('./InstanciaNova')()
const contadorD = require('./InstanciaNova')()
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) // O valor foi alterado, pois eu apenas criei um módulo que retorna o mesmo valor 

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor) // valor não foi alterado, pois toda vez que chamo o modulo instancia nova, retorno um novo obj a partir da factory