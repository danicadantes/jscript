let x = 1;
let y = 1;

while ( x <= 7 ) { 
    let z = 1;
    let output = '';
    while ( z <= y ){        
        output +='*';
        z++;        
    } 
    y +=2;     
    console.log( output);  
    x++;
}

