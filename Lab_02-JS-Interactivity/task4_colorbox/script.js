
// Task 4: Color Box Generator

const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const boxArea = document.getElementById("boxArea");
const info = document.getElementById("info");

function addColorFromInput(inputEl) {
  const color = inputEl.value.trim();
  if (!color) {
    alert("Please enter a color first.");
    return;
  }
  const box = document.createElement("div");
  box.className = "colorBox";
  box.style.background = color;

  const label = document.createElement("span");
  label.textContent = color;
  box.appendChild(label);

  boxArea.appendChild(box);
  inputEl.value = "";
}

function clearBoxes() {
  boxArea.innerHTML = "";
}

function renderBOMInfo() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const ua = navigator.userAgent;
  const url = location.href;

  info.innerHTML = `
    <div><strong>Window:</strong> ${w} × ${h}</div>
    <div><strong>URL:</strong> <span class="subtitle">${url}</span></div>
    <div><strong>Browser (UA):</strong> <span class="subtitle">${ua}</span></div>
  `;
}

document.getElementById("btnAdd1").addEventListener("click", () => addColorFromInput(c1));
document.getElementById("btnAdd2").addEventListener("click", () => addColorFromInput(c2));
document.getElementById("btnAdd3").addEventListener("click", () => addColorFromInput(c3));
document.getElementById("btnClear").addEventListener("click", clearBoxes);
document.getElementById("btnRefresh").addEventListener("click", renderBOMInfo);

window.addEventListener("resize", renderBOMInfo);

renderBOMInfo();
