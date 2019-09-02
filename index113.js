function getShapePerimiter  (base ,height) {    
    const perimeter = (base === height) ? 4*base : 2*( height + base );
    let message = `${perimeter} is the shape perimiter \n`;
    message += (perimeter > 100) ? 'The perimeter is too big' : 'The perimiter is fine';
    return message;
}
console.log(getShapePerimiter(5,28));
console.log(getShapePerimiter(20,20));
console.log(getShapePerimiter(60,10));