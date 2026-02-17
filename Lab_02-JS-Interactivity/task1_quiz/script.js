
// Task 1: Dynamic Quiz

const q1 = "1) JavaScript runs mainly in which environment for web pages?";
const a1 = "browser";

const q2 = "2) Which keyword creates a block-scoped variable?";
const a2 = "let";

const q3 = "3) What does DOM stand for?";
const a3 = "document object model";

const q4 = "4) Which operator checks value AND type equality?";
const a4 = "===";

const q5 = "5) What function shows an OK/Cancel dialog?";
const a5 = "confirm";

// Build question list (each item references the above variables)
const quizData = [
  { question: q1, correct: a1, options: ["browser", "database", "compiler", "router"] },
  { question: q2, correct: a2, options: ["var", "let", "const", "static"] },
  { question: q3, correct: a3, options: ["data object model", "document object model", "display object method", "dynamic order map"] },
  { question: q4, correct: a4, options: ["==", "===", "!=", "<="] },
  { question: q5, correct: a5, options: ["alert", "prompt", "confirm", "console.log"] },
];

const questionsEl = document.getElementById("questions");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

function renderQuestions() {
  questionsEl.innerHTML = "";
  quizData.forEach((item, idx) => {
    const wrapper = document.createElement("div");
    wrapper.className = "question";
    wrapper.innerHTML = `
      <h3>${item.question}</h3>
      <div class="options">
        ${item.options
          .map(
            (opt) => `
            <label class="option">
              <input type="radio" name="q${idx}" value="${opt}">
              <span>${opt}</span>
            </label>`
          )
          .join("")}
      </div>
    `;
    questionsEl.appendChild(wrapper);
  });
}

// Individual check functions
function checkQ0() { return getAnswer(0) === quizData[0].correct; }
function checkQ1() { return getAnswer(1) === quizData[1].correct; }
function checkQ2() { return getAnswer(2) === quizData[2].correct; }
function checkQ3() { return getAnswer(3) === quizData[3].correct; }
function checkQ4() { return getAnswer(4) === quizData[4].correct; }

function getAnswer(index) {
  const selected = document.querySelector(`input[name="q${index}"]:checked`);
  return selected ? selected.value.toLowerCase().trim() : "";
}

function calculateScore() {
  let score = 0;
  const checks = [checkQ0, checkQ1, checkQ2, checkQ3, checkQ4];
  for (let i = 0; i < checks.length; i++) {
    if (checks[i]()) score++;
  }
  return score;
}

function scoreMessage(score, total) {
  // Conditional statements
  if (score === total) return "Perfect! You nailed it ✅";
  else if (score >= total - 1) return "Great job! Almost perfect 💪";
  else if (score >= Math.ceil(total / 2)) return "Good effort — keep practicing 🙂";
  else return "Needs improvement — revise JS basics and try again 📚";
}

function showResult() {
  const total = quizData.length;
  const score = calculateScore();

  resultBox.classList.remove("ok", "danger");
  resultBox.classList.add(score >= Math.ceil(total / 2) ? "ok" : "danger");

  resultText.innerHTML = `
    <div><strong>Score:</strong> ${score} / ${total}</div>
    <div class="subtitle">${scoreMessage(score, total)}</div>
  `;
}

function resetQuiz() {
  document.getElementById("quizForm").reset();
  resultBox.classList.remove("ok", "danger");
  resultText.textContent = "No attempt yet.";
}

document.getElementById("btnSubmit").addEventListener("click", showResult);
document.getElementById("btnReset").addEventListener("click", resetQuiz);

renderQuestions();
