//Gerar um numero entre dois numeros

function gerarNumeroEntre(min,max){
    if(min > max){
        [min, max] = [max, min]
    }

     return new Promise((resolve) =>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
     })
}
gerarNumeroEntre(10,30).then(console.log)
  