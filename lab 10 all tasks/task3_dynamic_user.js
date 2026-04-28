// Task 3: Dynamic User Page
// Creates route /user/:name and displays the name in browser
// Example: /user/Ali -> Hello Ali

const express = require('express');
const app = express();

// Dynamic route with :name parameter
app.get('/user/:name', (req, res) => {
  const name = req.params.name;

  // Capitalize first letter
  const formatted = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello ${formatted}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #003366, #0077cc);
          }
          .card {
            background: white;
            border-radius: 16px;
            padding: 50px 60px;
            text-align: center;
            box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          }
          .avatar {
            font-size: 64px;
            margin-bottom: 10px;
          }
          h1 { color: #003366; font-size: 2.5rem; margin: 0; }
          p  { color: #777; font-size: 16px; margin-top: 10px; }
          a  { color: #0077cc; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="avatar">👋</div>
          <h1>Hello, ${formatted}!</h1>
          <p>Welcome to the Dynamic User Page.</p>
          <p>Try: <a href="/user/Ahmed">/user/Ahmed</a> | <a href="/user/Sara">/user/Sara</a></p>
        </div>
      </body>
    </html>
  `;
  res.send(html);
});

// Default route
app.get('/', (req, res) => {
  res.send(`
    <h2>Task 3: Dynamic User Page</h2>
    <p>Try visiting: <a href="/user/Ali">/user/Ali</a> or <a href="/user/Ahmed">/user/Ahmed</a></p>
  `);
});

app.listen(3003, () => {
  console.log("Task 3 running at http://localhost:3003");
  console.log("Try: http://localhost:3003/user/Ali");
});
