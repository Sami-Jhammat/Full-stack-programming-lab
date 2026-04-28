// Task 4: Simple HTML Page Renderer
// Creates / route that returns a full HTML page using Express
// Includes title, paragraph and simple list

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Full Stack Lab - Air University</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: 'Segoe UI', Arial, sans-serif;
            background: #f0f4f8;
            color: #333;
          }
          header {
            background: #003366;
            color: white;
            padding: 20px 40px;
            text-align: center;
          }
          header h1 { font-size: 2rem; }
          header p  { font-size: 0.95rem; opacity: 0.8; margin-top: 6px; }
          main {
            max-width: 750px;
            margin: 40px auto;
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          h2 { color: #003366; margin-bottom: 12px; }
          p  { line-height: 1.7; color: #555; margin-bottom: 20px; }
          ul {
            list-style: none;
            padding: 0;
          }
          ul li {
            padding: 12px 16px;
            margin-bottom: 8px;
            background: #eef4fb;
            border-left: 4px solid #003366;
            border-radius: 6px;
            font-size: 15px;
          }
          ul li::before {
            content: "✅ ";
          }
          footer {
            text-align: center;
            padding: 20px;
            color: #888;
            font-size: 13px;
          }
        </style>
      </head>
      <body>

        <header>
          <h1>🎓 Full Stack Programming Lab</h1>
          <p>Air University — BSSE-VI | Node.js + Express.js</p>
        </header>

        <main>
          <h2>About This Lab</h2>
          <p>
            This lab introduces students to backend web development using Node.js and Express.js.
            Students learn to build web servers, handle HTTP requests, create REST APIs,
            and work with modules and asynchronous I/O in JavaScript.
          </p>

          <h2>Topics Covered in Lab 10</h2>
          <ul>
            <li>Node.js Runtime Environment Setup</li>
            <li>Web Server using the http module</li>
            <li>Client-Server Communication (GET &amp; POST)</li>
            <li>Modules &amp; NPM (fs, http)</li>
            <li>Async I/O with Callbacks</li>
            <li>Non-blocking Code with setTimeout</li>
            <li>JSON Read &amp; Send Data</li>
            <li>Express.js Server Development</li>
            <li>REST API — CRUD Operations (GET, POST, PUT, DELETE)</li>
          </ul>
        </main>

        <footer>
          &copy; 2025 Air University, Islamabad — Instructor: Mr. Sharif Hussain
        </footer>

      </body>
    </html>
  `;
  res.send(html);
});

app.listen(3004, () => {
  console.log("Task 4 running at http://localhost:3004");
});
