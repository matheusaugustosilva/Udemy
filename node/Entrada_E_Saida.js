const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo) {
    process.stdout.write("Fala anônimo!\n")
    process.exit()
}else {
    process.stdout.write("Informe o seu nome: ")
    process.stdin.on('data', data => { // vai pegar o enter do teclado 
        const nome = data.toString().replace('\n', '') // troca a quebra de linha do enter por um espaço em branco 

        process.stdout.write (`Fala ${nome}\n`)
        process.exit()
    })
}   