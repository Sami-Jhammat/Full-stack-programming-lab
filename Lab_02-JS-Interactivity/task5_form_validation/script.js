
// Task 5: Form Validation

const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const ageEl = document.getElementById("age");
const passEl = document.getElementById("password");

const errName = document.getElementById("errName");
const errEmail = document.getElementById("errEmail");
const errAge = document.getElementById("errAge");
const errPass = document.getElementById("errPass");

const msgBox = document.getElementById("msg");
const msgText = document.getElementById("msgText");

function setError(el, message) {
  el.textContent = message || "";
}

function validateName() {
  const v = nameEl.value.trim();
  if (v.length === 0) {
    setError(errName, "Name should not be empty.");
    return false;
  }
  setError(errName, "");
  return true;
}

function validateEmail() {
  const v = emailEl.value.trim();
  if (v.length === 0) {
    setError(errEmail, "Email should not be empty.");
    return false;
  }
  if (!v.includes("@")) {
    setError(errEmail, "Email must contain '@'.");
    return false;
  }
  setError(errEmail, "");
  return true;
}

function validateAge() {
  const v = Number(ageEl.value);
  if (!ageEl.value) {
    setError(errAge, "Age is required.");
    return false;
  }
  if (Number.isNaN(v) || v < 18 || v > 60) {
    setError(errAge, "Age must be between 18 and 60.");
    return false;
  }
  setError(errAge, "");
  return true;
}

function validatePassword() {
  const v = passEl.value;
  if (v.length < 6) {
    setError(errPass, "Password must be at least 6 characters.");
    return false;
  }
  setError(errPass, "");
  return true;
}

function validateAll() {
  // call each validator individually
  const ok1 = validateName();
  const ok2 = validateEmail();
  const ok3 = validateAge();
  const ok4 = validatePassword();
  return ok1 && ok2 && ok3 && ok4;
}

function onSubmit() {
  msgBox.classList.remove("ok", "danger");

  const ok = validateAll();
  if (!ok) {
    msgBox.classList.add("danger");
    msgText.textContent = "Please fix the errors above and submit again.";
    return;
  }

  msgBox.classList.add("ok");
  msgText.textContent = "All inputs look valid ✅";

  // Confirm submission using confirm()
  const sure = confirm("All fields are valid. Do you want to submit?");
  if (!sure) {
    msgBox.classList.remove("ok");
    msgBox.classList.add("danger");
    msgText.textContent = "Submission cancelled by user.";
    return;
  }

  // Bonus interactions
  const nickname = prompt("Bonus: Enter a nickname (optional):", "");
  if (nickname && nickname.trim().length > 0) {
    alert(`Welcome, ${nickname.trim()}! Your registration is submitted.`);
  } else {
    alert("Registration submitted successfully!");
  }

  // simulate submission complete
  msgText.textContent = "Submitted successfully 🎉 (Demo submission)";
}

function onReset() {
  document.getElementById("regForm").reset();
  [errName, errEmail, errAge, errPass].forEach(e => e.textContent = "");
  msgBox.classList.remove("ok","danger");
  msgText.textContent = "Fill the form and submit.";
}

document.getElementById("btnSubmit").addEventListener("click", onSubmit);
document.getElementById("btnReset").addEventListener("click", onReset);

// Live validation (optional)
nameEl.addEventListener("input", validateName);
emailEl.addEventListener("input", validateEmail);
ageEl.addEventListener("input", validateAge);
passEl.addEventListener("input", validatePassword);
