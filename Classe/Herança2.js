// Cadeia de protótipos (prototype chain) 
const avó = {atributo1: 'a'}
const pai = {__proto__: avó, atributo2: 'b'}
const filho = {__proto__: pai, atributo3: 'c'}

console.log(filho.atributo2)
console.log(pai.__proto__) // o objetct.prototype dele foi mudado para o objeto avó 
console.log(filho.__proto__)
console.log(avó.__proto__)

const carro = {
    ValAtual:0, 
    VelMax: 200, 
    acelerarMais(delta){
        if(this.ValAtual + delta <= this.VelMax){
            this.ValAtual += delta
        }else{
            this.ValAtual = this.VelMax
        }
    }, 
    status(){
        return `${this.ValAtual}Km/h de ${this.VelMax}Km/h`
    }
}
const ferrari = {
    Modelo: 'F40', 
    VelMax: 320 // shadowing, usa o atribuito menos abrangente, logo a velmax vai ser substituida
}

const volvo = {
    Modelo: 'X60', 
    status(){
        return `${this.Modelo}: ${super.status()}` // caso eu use o this, ele vai buscar no escopo menos abrangente, ou seja, dentro de volvo, o super busca fora
    }
}
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
console.log(volvo)
console.log(ferrari)

ferrari.acelerarMais(320)
volvo.acelerarMais(100)

console.log(volvo.status())
console.log(ferrari.status())