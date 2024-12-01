const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.toString().split('\n');
    const studentGroups = {};
    const fieldNames = lines[0].split(',');
    const studentPropNames = fieldNames.slice(0);
    const studentsList = lines.slice(1).filter((item) => item);

    for (const line of studentsList) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0);
      const field = studentPropValues[studentPropValues.length - 1];
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }
      const studentEntries = studentPropNames
        .map((propName, idx) => [propName, studentPropValues[idx]]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    const totalStudents = Object
      .values(studentGroups)
      .reduce((pre, cur) => (pre || []).length + cur.length);
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;