// Task 2: Simple Message Routes System
// Creates routes /home, /about, /contact and shows messages in browser

const express = require('express');
const app = express();

// Shared nav bar HTML
const navBar = `
  <nav style="background:#003366; padding:12px; text-align:center;">
    <a href="/home"    style="color:white; margin:0 15px; text-decoration:none; font-size:16px;">🏠 Home</a>
    <a href="/about"   style="color:white; margin:0 15px; text-decoration:none; font-size:16px;">ℹ️ About</a>
    <a href="/contact" style="color:white; margin:0 15px; text-decoration:none; font-size:16px;">📞 Contact</a>
  </nav>
`;

// Helper to wrap content in styled HTML page
function buildPage(title, content) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; background: #f0f4f8; }
          .content { max-width: 600px; margin: 60px auto; background: white;
                     padding: 40px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                     text-align: center; }
          h1 { color: #003366; }
          p  { color: #555; font-size: 16px; }
        </style>
      </head>
      <body>
        ${navBar}
        <div class="content">${content}</div>
      </body>
    </html>
  `;
}

// /home route
app.get('/home', (req, res) => {
  res.send(buildPage('Home', `
    <h1>🏠 Welcome Home!</h1>
    <p>This is the Home Page. Explore the site using the navigation above.</p>
  `));
});

// /about route
app.get('/about', (req, res) => {
  res.send(buildPage('About', `
    <h1>ℹ️ About Us</h1>
    <p>We are students of Air University, BSSE-VI. This lab demonstrates Node.js + Express routing.</p>
  `));
});

// /contact route
app.get('/contact', (req, res) => {
  res.send(buildPage('Contact', `
    <h1>📞 Contact Us</h1>
    <p>Email: info@airuni.edu.pk</p>
    <p>Phone: +92-51-9262557</p>
    <p>Address: Air University, Islamabad</p>
  `));
});

// Default redirect
app.get('/', (req, res) => {
  res.redirect('/home');
});

app.listen(3002, () => {
  console.log("Task 2 running at http://localhost:3002/home");
});
