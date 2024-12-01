const fs = require('fs');

function countStudents(path) {
  try {
    // Read file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split into lines and remove empty lines
    const lines = data.split('\n').filter(line => line.length > 0);
    
    // Remove header and get students
    const students = lines.slice(1);
    
    // Count total students
    console.log(`Number of students: ${students.length}`);
    
    // Group by field
    const csStudents = students.filter(student => student.endsWith('CS')).map(student => student.split(',')[0]);
    const sweStudents = students.filter(student => student.endsWith('SWE')).map(student => student.split(',')[0]);
    
    // Print results
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;