function novoElemento(tagName, className){
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false){
    this.elemento = novoElemento('div', 'barreira')
    const borda = novoElemento('div', "borda")
    const corpo = novoElemento("div", "corpo")
    this.elemento.appendChild(reversa ? corpo: borda) // aqui vou decidir se a barreira começa pelo corpo ou pela borda 
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px` // mexendo na altura das barreiras
}
/* const b = new Barreira(true)
b.setAltura(300)
document.querySelector('[wm-flappy]').appendChild(b.elemento) */
function ParDeBarreiras(altura, abertura, x){
    this.elemento = novoElemento("div", "par-de-barreiras")

    this.superior = new Barreira(true) //uso this para deixar o elemento visivel fora da function 
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura) // utilizo um valor aleatório para calcular a altura superior e inferior 
        const alturaInferior = altura- abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]) //saber em que posicao o par de barreiras esta
    this.setX = x => this.elemento.style.left = `${x}px`//altero o x
    this.getLargura = () => this.elemento.clientWidth
    
    this.sortearAbertura()
    this.setX(x)
}
/* const b = new ParDeBarreiras(700,200,400)
document.querySelector("[wm-flappy]").appendChild(b.elemento) */

function Barreiras(altura, largura, abertura, espaco, notificarPonto) { //controlar multiplas barreiras
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),  //esta na posicao 1000px
        new ParDeBarreiras(altura, abertura, largura + espaco), //esta na posicao 1000px + espaco entre elas
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]
    const descolamento = 3 
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - descolamento)

            //Quando o elemento sair da tela
            if(par.getX() < -par.getLargura()){
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura() // vou reutizar as 4 barreias mas estou mudando suas aberturas a partir disso
            }
            const meio = largura / 2
            const cruzouOmeio = par.getX() + descolamento >= meio
                && par.getX() < meio
            if(cruzouOmeio) notificarPonto() 
        })
    }
}

function Passaro(alturaJogo){
    let voando = false 

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'
    
    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight
        if(novoY <= 0) {
            this.setY(0)
        }   else if(novoY >= alturaMaxima){
            this.setY(alturaMaxima)
        }else{
            this.setY(novoY)
        }
    }
    this.setY(alturaJogo/2)
}

function Progresso(){
    this.elemento = novoElemento("span", "progresso")
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

/* const barreiras = new Barreiras(700,1100,200,400)
const passaro = new Passaro(700)
const areaDoJogo = document.querySelector('[wm-flappy]')
areaDoJogo.appendChild(passaro.elemento)
areaDoJogo.appendChild(new Progresso().elemento)
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
setInterval(() => {
    barreiras.animar()
    passaro.animar()
},20) */

function sobrepostos(elementoA, elementoB){
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
    const vertical = a.top + a.height >=b.top
        && b.top + b.height >=a.top
    return horizontal && vertical
}

function colidiu(passaro, barreiras) {
    let colidiu = false 
    barreiras.pares.forEach(ParDeBarreiras => {
        if(!colidiu) {
            const superior = ParDeBarreiras.superior.elemento
            const inferior = ParDeBarreiras.inferior.elemento
            colidiu = sobrepostos(passaro.elemento, superior) 
                || sobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}

function flappyBird(){
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400, 
        () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    //loop do jogo
    this.start = () => {
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if(colidiu(passaro, barreiras)){
                clearInterval(temporizador)
            }
        }, 20)
    }
}
new flappyBird().start()