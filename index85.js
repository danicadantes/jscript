let number = 1;
let alpha = 0;
let beta = 1;

do{
    const sum = alpha + beta    
    alpha = beta;
    beta = sum;
    console.log(sum);
    number++;
}
while ( number <= 10 ) {     
    
}
