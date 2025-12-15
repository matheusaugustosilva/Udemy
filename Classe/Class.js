class avô {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
class pai extends avô{ // essa é a forma de tornar avô um protótipo de pai em class
    constructor(sobrenome, profissão = 'Professor'){
        super(sobrenome)
        this.profissão = profissão
    }
}
class Filho extends pai{
    constructor(){
        super('Silva')
    }
}
const filho = new Filho
console.log(filho)

