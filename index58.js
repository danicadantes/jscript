const hour = 19;
if(hour >= 5 && hour <12){
console.log('Good morning');
} else if(hour>=12 && hour <=18){
console.log('Good Afternoon');
} else if(hour>=18 && hour <=22){
console.log('Good Evening');
}else if ( (hour >= 22 && hour <=24) && ( hour >= 1 && hour < 5) ) {
console.log('Good night');
} else {
console.log('Please enter time only from 1 to 24');
}