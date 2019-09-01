let f0 = 0;
let f1 = 1;
let f2 = 1;
console.log(f2);
let x = 25;
let i = 2;
for (let i = 2; i <= x; i++) {
    f2 = f1 +f0 ;
    console.log(f2);
    f0 = f1;
    f1 = f2;  
}