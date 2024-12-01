const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.toString().split('\n');
  const students = lines.filter((line) => line.length > 0 && line !== lines[0]);
  const csStudents = students.filter((student) => student.endsWith('CS')).map((student) => student.split(',')[0]);
  const sweStudents = students.filter((student) => student.endsWith('SWE')).map((student) => student.split(',')[0]);

  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);

  return { students, csStudents, sweStudents };
}

module.exports = countStudents;