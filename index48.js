const message = "3.14 it's a great number but 42 it's the answer to life.";
const pi = message.slice(0,4);
console.log(parseFloat(pi));

let answerToLife = message.substr(29,30);
console.log(parseInt(answerToLife));

const result = parseFloat(pi) + parseInt(answerToLife);
console.log(result);
console.log(`${result} is the result of adding pi and answerToLife`);
console.log(typeof result.toString());
