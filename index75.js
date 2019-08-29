let number = 1;
let alpha = 0;
let beta = 1;

while ( number <= 10 ) {     
    const sum = alpha + beta    
    alpha = beta;
    beta = sum;
    console.log(sum);
    number++;
}
