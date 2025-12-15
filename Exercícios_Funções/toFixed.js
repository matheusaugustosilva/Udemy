function transf(qtd = 0.30000000000000004){
    return qtd.toFixed(2).toString().replace(",", ".")
}
console.log(transf())
//I need to transform qtd into string because the prompt "replace" dosen't work with numbers