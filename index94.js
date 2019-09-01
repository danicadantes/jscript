let stars = 14;
for (let i = 1; i <= stars; i++) {
    if (i % 2 !== 0 ) {
        let y = 1;
        let result = '';
        while (y <= i) {
           result =  result + '*';
            y++ 
        }
       
        console.log(result);
}
}