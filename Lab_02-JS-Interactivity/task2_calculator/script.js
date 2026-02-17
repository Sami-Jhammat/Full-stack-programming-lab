
// Task 2: Interactive Calculator
const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const opEl = document.getElementById("op");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

function parseNumber(el) {
  const v = el.value;
  return v === "" ? null : Number(v);
}

function calculate(n1, n2, op) {
  // validation via conditionals
  if (n1 === null || n2 === null || Number.isNaN(n1) || Number.isNaN(n2)) {
    return { ok: false, message: "Please enter valid numbers in both fields." };
  }

  let res;
  switch (op) {
    case "add": res = n1 + n2; break;
    case "sub": res = n1 - n2; break;
    case "mul": res = n1 * n2; break;
    case "div":
      if (n2 === 0) return { ok: false, message: "Division by zero is not allowed." };
      res = n1 / n2;
      break;
    default:
      return { ok: false, message: "Invalid operation selected." };
  }
  return { ok: true, value: res };
}

function showResult() {
  const n1 = parseNumber(num1El);
  const n2 = parseNumber(num2El);
  const op = opEl.value;

  const out = calculate(n1, n2, op);

  resultBox.classList.remove("ok", "danger");
  if (!out.ok) {
    resultBox.classList.add("danger");
    resultText.textContent = out.message;
    return;
  }

  // Bonus: color depending on positive or negative
  if (out.value >= 0) resultBox.classList.add("ok");
  else resultBox.classList.add("danger");

  resultText.innerHTML = `<div class="subtitle">Answer: <strong>${out.value}</strong></div>`;
}

function clearAll() {
  num1El.value = "";
  num2El.value = "";
  opEl.value = "add";
  resultBox.classList.remove("ok", "danger");
  resultText.textContent = "Waiting for input...";
}

document.getElementById("btnCalc").addEventListener("click", showResult);
document.getElementById("btnClear").addEventListener("click", clearAll);
