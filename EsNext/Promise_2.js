function esperarPor(tempo = 2000){
    return new Promise(function (resolve){
        setTimeout(function(){
            console.log("Executando")
            resolve()
        }, tempo)
    })
}
esperarPor(1000)
    .then(() => esperarPor(2000))
    .then(() => esperarPor(3000))