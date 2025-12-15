const obj = {a: 1, b: 2, c: 3, soma() {a + b + c}}
console.log(JSON.stringify(obj)) // OBJ para JSON
//A função n foi convertida, pois JSON é um formato de dados e não algo executável 

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3} '))    
console.log(JSON.parse('{"d": 1}'))