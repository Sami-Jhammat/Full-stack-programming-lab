// Lab 03 — Task 3
// Student: sami jhammat | Roll No: 232002

// Requirements:
// - Create fetchUsers() returning a Promise
// - Use setTimeout() with 3 seconds delay
// - Resolve with array of user objects
// - Reject using a boolean flag if data fails
// - Use .then() and .catch()
// - Display results in HTML

function fetchUsers(shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Server error: Failed to load users (simulated)."));
        return;
      }

      const users = [
        { id: 1, name: "Ahmed", email: "ahmed@example.com" },
        { id: 2, name: "Fatima", email: "fatima@example.com" },
        { id: 3, name: "Usman", email: "usman@example.com" },
        { id: 4, name: "Hira", email: "hira@example.com" },
      ];

      resolve(users);
    }, 3000); // 3 seconds delay
  });
}

const statusEl = document.getElementById("status");
const resultsEl = document.getElementById("results");
const failFlagEl = document.getElementById("failFlag");

function setStatus(msg) {
  statusEl.textContent = msg;
}

function renderUsers(users) {
  const rows = users.map(u => `
    <tr>
      <td>${u.id}</td>
      <td>${u.name}</td>
      <td>${u.email}</td>
    </tr>
  `).join("");

  resultsEl.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
}

document.getElementById("loadBtn").addEventListener("click", () => {
  resultsEl.innerHTML = "";
  setStatus("Loading... (waiting 3 seconds)");

  const shouldFail = failFlagEl.checked;

  fetchUsers(shouldFail)
    .then((users) => {
      setStatus(`Loaded ${users.length} users successfully at ${new Date().toLocaleTimeString()}`);
      renderUsers(users);
    })
    .catch((err) => {
      setStatus(`Error: ${err.message}`);
      resultsEl.innerHTML = `<div class="codebox" style="border-color: rgba(255,107,107,.4)">${err.stack}</div>`;
    });
});

document.getElementById("resetViewBtn").addEventListener("click", () => {
  resultsEl.innerHTML = "";
  setStatus("Cleared output.");
});
