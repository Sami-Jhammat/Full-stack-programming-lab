// Task 1: Student List Display (GET Only)
// Creates an Express server that shows a list of students in browser using HTML <li>
// Data is stored in an array

const express = require('express');
const app = express();

// Student data stored in array
const students = [
  { id: 1, name: "Ali Hassan",     roll: "BSSE-001", cgpa: 3.8 },
  { id: 2, name: "Ahmed Khan",     roll: "BSSE-002", cgpa: 3.5 },
  { id: 3, name: "Sara Malik",     roll: "BSSE-003", cgpa: 3.9 },
  { id: 4, name: "Usman Tariq",    roll: "BSSE-004", cgpa: 3.2 },
  { id: 5, name: "Fatima Sheikh",  roll: "BSSE-005", cgpa: 3.7 }
];

// GET route to display student list
app.get('/students', (req, res) => {
  let listItems = students
    .map(s => `<li><strong>${s.name}</strong> — Roll: ${s.roll} | CGPA: ${s.cgpa}</li>`)
    .join('');

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Student List</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; background: #f4f4f4; }
          h1   { color: #003366; text-align: center; }
          ul   { background: white; padding: 20px 40px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
          li   { padding: 10px 0; border-bottom: 1px solid #eee; font-size: 16px; }
          li:last-child { border-bottom: none; }
        </style>
      </head>
      <body>
        <h1>📚 Student List</h1>
        <ul>${listItems}</ul>
      </body>
    </html>
  `;
  res.send(html);
});

// Default route
app.get('/', (req, res) => {
  res.send('<h2>Task 1: Student List — <a href="/students">Click here to view students</a></h2>');
});

app.listen(3001, () => {
  console.log("Task 1 running at http://localhost:3001/students");
});
