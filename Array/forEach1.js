const carros = ['BMW','Audi','Mercedes','Porsche']
carros.forEach(function(string, index, arrayorginal){
    console.log(`${index + 1}: ${string}`)
})

Array.prototype.forEach2 = function(retornar){
    for(i = 0; i< this.length; i++){
        retornar(this[i], i, this)
    }
}
carros.push('Ferrari')
carros.sort()
carros.forEach2(function(nome, num){
    console.log(`${num + 1}: ${nome}`)
})