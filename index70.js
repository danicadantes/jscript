let number = 0;
let result = 0;

while( number < 1001){
    if(number %2 !== 0){
        result += number;
    } 
  number++;
}
console.log(`Output= ${result}`);