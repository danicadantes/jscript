const femaleStudents = ['Maryan','Diana','Brenda','Gloria','Foram'];
const maleStudents = ['Samuel','Thomas','Ubeydullah','Roel','Neil'];
const students = femaleStudents.concat(maleStudents).sort();

console.log('-->Using numeric indexes'.toUpperCase());
console.log(femaleStudents[0]);
console.log(femaleStudents[1]);
console.log(femaleStudents[2]);
console.log(femaleStudents[3]);
console.log(femaleStudents[4]);

console.log('-->Using while'.toUpperCase());

let cont =0 ;
let showMaleNames = '';
while (cont < maleStudents.length) {
    showMaleNames += `${maleStudents[cont]} \n`;
    cont++;
}
console.log(showMaleNames);

console.log('-->Using for'.toUpperCase());

let showStudentsNames = '';
for (let i = 0; i < students.length; i++) {
    showStudentsNames += `${students[i]} \n`;    
}
console.log(showStudentsNames);