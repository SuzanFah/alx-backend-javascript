const fs = require('fs');

function countStudents(path) {
  try {
    // Read file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split data into lines and filter out empty lines
    const lines = data.split('\n').filter(line => line.length > 0);
    
    // Remove header
    const students = lines.slice(1);
    
    console.log(`Number of students: ${students.length}`);
    
    // Group students by field
    const fields = {};
    students.forEach(student => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = {
          count: 1,
          students: [firstname]
        };
      } else {
        fields[field].count += 1;
        fields[field].students.push(firstname);
      }
    });
    
    // Print results for each field
    for (const [field, data] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${data.count}. List: ${data.students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;