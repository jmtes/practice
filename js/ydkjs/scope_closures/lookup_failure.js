// EXAMPLE OF LOOKUP FAILURE AND ACCIDENTAL GLOBAL VARIABLE CREATION
function getStudentName2 () {
  // Assignment to an undeclared variable
  nextStudent2 = 'Juno';
}

getStudentName2();

console.log(nextStudent2);
