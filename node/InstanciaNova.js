// uma factory retorna uma nova instância/obj

module.exports =  () => {
    return{
        valor:1, 
        inc(){
            this.valor++
        }
    }
}