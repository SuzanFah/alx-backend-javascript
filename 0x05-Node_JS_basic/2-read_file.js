const fs = require('fs');

function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf8');
    const lines = fileContent.trim().split('\n');
    const studentData = lines.slice(1).filter(line => line);
    
    const csStudents = [];
    const sweStudents = [];
    
    studentData.forEach(student => {
      const [firstName, , , field] = student.split(',');
      if (field === 'CS') csStudents.push(firstName);
      if (field === 'SWE') sweStudents.push(firstName);
    });

    console.log(`Number of students: ${studentData.length}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;