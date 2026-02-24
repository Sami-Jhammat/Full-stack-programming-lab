// Lab 03 — Task 1
// Student: sami jhammat | Roll No: 232002

// Requirement recap:
// - Create a Student class using ES6
// - constructor initializes id, name, semester, courses (array)
// - Create at least 3 student objects
// - Display details using template literals and innerHTML

class Student {
  constructor(id, name, semester, courses = []) {
    this.id = id;
    this.name = name;
    this.semester = semester;
    this.courses = courses;
  }

  // Optional helper: format courses nicely
  courseList() {
    return this.courses.length ? this.courses.join(", ") : "—";
  }
}

const defaultStudents = () => ([
  new Student(1, "Ali", "6th", ["JS", "HTML", "CSS"]),
  new Student(2, "Ayesha", "5th", ["OOP", "DBMS"]),
  new Student(3, "Hassan", "6th", ["AI", "SE", "Web"])
]);

let students = defaultStudents(); // let because we update the list

const studentsContainer = document.getElementById("studentsContainer");
const summary = document.getElementById("summary");

function renderStudents() {
  const rows = students.map((s) => `
    <tr>
      <td>${s.id}</td>
      <td>${s.name}</td>
      <td>${s.semester}</td>
      <td>${s.courseList()}</td>
    </tr>
  `).join("");

  studentsContainer.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Semester</th>
          <th>Courses</th>
        </tr>
      </thead>
      <tbody>
        ${rows || `<tr><td colspan="4">No students yet.</td></tr>`}
      </tbody>
    </table>
  `;

  // Dynamic summary using template literals
  const totalCourses = students.reduce((acc, s) => acc + s.courses.length, 0);
  summary.textContent = `Total Students: ${students.length}
Total Course Entries (including repeats): ${totalCourses}
Last Updated: ${new Date().toLocaleString()}`;
}

function readStudentFromForm() {
  const id = Number(document.getElementById("sid").value);
  const name = document.getElementById("sname").value.trim();
  const semester = document.getElementById("ssemester").value.trim();
  const coursesRaw = document.getElementById("scourses").value.trim();

  const courses = coursesRaw
    ? coursesRaw.split(",").map(c => c.trim()).filter(Boolean)
    : [];

  return { id, name, semester, courses };
}

document.getElementById("addStudentBtn").addEventListener("click", () => {
  const { id, name, semester, courses } = readStudentFromForm(); // destructuring is fine here

  if (!id || !name || !semester) {
    alert("Please enter ID, Name, and Semester.");
    return;
  }

  // Prevent duplicate IDs for cleanliness
  const exists = students.some(s => s.id === id);
  if (exists) {
    alert("A student with this ID already exists. Use a different ID.");
    return;
  }

  // Use const for object we won't reassign
  const newStudent = new Student(id, name, semester, courses);
  students = [...students, newStudent]; // spread to create updated list immutably
  renderStudents();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  students = defaultStudents();
  renderStudents();
});

// initial render
renderStudents();
