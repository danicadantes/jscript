let x = 1;
for (let stars = 14; stars >= x; stars--) {
    let y = 1;
     let resulta = '';
     while (y <= stars) {
        resulta =  resulta + '*';
         y++;
     }
     console.log(resulta);
}