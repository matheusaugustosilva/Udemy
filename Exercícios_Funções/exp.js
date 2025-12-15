function elevar(base, expoente){
    if(base == 0 && expoente == 0){
        return `INDETERMINAÇÃO`
    }
    else{
        return base**expoente
    }
}
console.log(elevar(2,4))
console.log(elevar(0,0))
const expoente = (base, expoente) => console.log(base**expoente) 
expoente(2,5)