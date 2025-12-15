
function gritar(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!')
    } catch(e){
        tratarerro(e)
    } finally{
        console.log('final')
    }
} 
function tratarerro(erro){
    throw  new Error('...')
}


const ojj = {name: 'Matheus'}
gritar(ojj)