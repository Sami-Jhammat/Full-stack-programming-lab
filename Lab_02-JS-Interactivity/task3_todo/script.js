const initialTasks = [
  "Prepare Lab 02 folder structure",
  "Finish Task 1 Quiz UI & logic",
  "Push to GitHub with report"
];

const listEl = document.getElementById("todoList");

function createItem(text, index) {
  const row = document.createElement("div");
  row.className = "item";
  row.dataset.index = index;

  row.innerHTML = `
    <div class="left">
      <span class="badge">Task ${index + 1}</span>
      <input type="text" value="${text}" />
    </div>
    <div class="actions">
      <button type="button" class="btnComplete">Complete</button>
      <button type="button" class="btnRemove danger">Remove</button>
    </div>
  `;

  row.querySelector(".btnComplete").addEventListener("click", () => toggleComplete(row));
  row.querySelector(".btnRemove").addEventListener("click", () => removeItem(row));
  return row;
}

function renderList() {
  listEl.innerHTML = "";

  // Loop: style all tasks the same way by generating the same structure
  for (let i = 0; i < initialTasks.length; i++) {
    listEl.appendChild(createItem(initialTasks[i], i));
  }
}

function toggleComplete(row) {
  row.classList.toggle("completed");
}

function removeItem(row) {
  // Dynamically hide/remove element
  row.remove();
}

function resetList() {
  renderList();
}

document.getElementById("btnReset").addEventListener("click", resetList);
renderList();
