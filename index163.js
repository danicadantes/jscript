function add() {
    let result = 0;
    for (let i = 0; i <= arguments.length -1;i++) {
        result = result + arguments[i];
    };
    return result;
};
console.log(add(2,7,17,19,23));
console.log(add(1,2,3,4,5,6,7,8,9,10));