function resultado(num1, num2, op){
    switch(op) {
        case '+': 
            console.log(num1 + num2)
            break
        
        case '-':
            console.log(num1 - num2)
            break
        case 'x': 
            console.log(num1* num2)
            break
        case '/':
            if(num2 !== 0){
                console.log(num1/num2); 
            }else{
                console.log('Digite um denominador válido')
            }
        default: 'DIGITE UM OPERADOR VÁLIDO'
    }
}
resultado(1,2,'+')
resultado(1,2,'-')
resultado(1,2,'x')
resultado(1,2,'/')
resultado(1,0,'/')

const res = (num1,num2) => {
    console.log(num1+num2)
    console.log(num1-num2)
    console.log(num1*num2)
    if(num2 !== 0) {
        console.log(num1/num2)
    }else{
        console.log("INDETERMINAÇÃO")
    }
}
res(1,2)