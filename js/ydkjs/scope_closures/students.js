var students = [
  {
    id: 14,
    name: 'Kyle'
  },
  {
    id: 73,
    name: 'Suzy'
  },
  {
    id: 112,
    name: 'Frank'
  },
  {
    id: 6,
    name: 'Sarah'
  }
];

function getStudentName (studentID) {
  for (const student of students) {
    if (student.id === studentID) {
      return student.name;
    }
  }
}

var nextStudent = getStudentName(73);

console.log(nextStudent);
