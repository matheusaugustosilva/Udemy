function triangulo(lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        return "Equilátero"
    }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        return "Isóceles"
    } else{
        return "Escaleno"
    }
}
console.log(triangulo(1,1,1))
console.log(triangulo(1,2,1))
console.log(triangulo(2,1,1))
console.log(triangulo(1,1,2))
console.log(triangulo(1,2,3))