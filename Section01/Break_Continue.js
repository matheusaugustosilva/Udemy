var nums = [1, 2, 3, 4,5,6,7,8,9,10]
for(x in nums){
    if(x ==6 ){ //aqui estou indicando o índice, ou seja, a posição

    
        break// Esse break está agindo encima do bloco for, while ou switch mais próximo
    }
    console.log(`${x} = ${nums[x]}`)

    for(y in nums) {
        if(y == 5)  {
         continue   
        } 
    console.log(`${y} = ${nums[y]}`)
}
        
    
}