//estrutura que tem por objetivo realizar uma operação assíncrona 
function FalarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(frase)
        }, segundos * 1000) // como o tempo é pego em ms, estou convertendo 
    })
}
FalarDepoisDe(3, "Que legal!") 
    .then(frase => frase.concat("?!?"))
    .then(OutraFrase => console.log(OutraFrase)) // then funciona com o resolve, ou seja, o primeiro parametro 

function delay(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            reject(frase)
        }, segundos*1000)
    })
}
delay(5, "Que bacana!")
.catch(e => console.log(e)) // catch funciona com reject para tratamento do erro 