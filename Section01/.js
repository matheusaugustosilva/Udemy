function gerar(min, max){
    const res = Math.random() * (max - min) + min
    return Math.floor(res)   
}
let opcao = 1

while (opcao != -1 ){
    opcao = gerar(-1, 10)
    console.log(opcao)
}

const nota= [1, 2, 3,6 ] // array com estrutura de repetição 
for(let i= 0; i< nota.length; i++){
    console.log(`As notas da turma foram ${nota[i]}`)
}
for (let i in nota){ // Interessante colocar esse let para nao obter acesso após esse for
    console.log(i, nota[i])
}