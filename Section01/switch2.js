const res = function(nota){
    switch(Math.floor(nota)){ //(Math.floor(nota))--> serve para que a nota seja arredondada para o floor e assim aceite números com vírgulas, como por exemplo 4.1
        case 10: case 9:
            console.log('Quadro de Honra')
            break

        case 6: case 8: case 7: 
            console.log('Aprovado')
            break

        case 6: case 5: case 4: 
            console.log('Recuperação')
            break
        
        case 3: case 2: case 1: case 0: 
            console.log('Reprovado')
            break

        default:
            console.log('Nota inválida')
              
        }

        
    }
    res(4.1)
    res(4)
    res(3)
    res(9)
    res(7.99)