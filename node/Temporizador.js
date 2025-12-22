const { templateSettings, snakeCase } = require('lodash')
const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 13 * * 1', function (){
    console.log("Executando tarefa 1", new Date().getSeconds())
})// executa de 5 em 5 segundos, meio-dia, qualquer dia, qualquee mês, dia da semana(comeca no 0)

setTimeout(function (){
    tarefa1.cancel  
    console.log("Cancelando tarefa 1!")
}, 20000) // 20 mil milisegundos = 20 s

const regra = new schedule.RecurrenceRule()
regra.day0fWeek = [new schedule.Range(1,5)]
regra.hour = 13
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra,function () {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})