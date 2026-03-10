import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div>

      <h1>Student Information Cards</h1>

      <StudentCard
        name="Ali Khan"
        rollNo="2021-SE-101"
        department="Software Engineering"
        university="Air University"
        color="lightblue"
      />

      <StudentCard
        name="Sara Ahmed"
        rollNo="2021-CS-102"
        department="Computer Science"
        university="Air University"
        color="lightgreen"
      />

      <StudentCard
        name="Ahmed Raza"
        rollNo="2021-AI-103"
        department="Artificial Intelligence"
        university="Air University"
        color="lightyellow"
      />

    </div>
  );
}

export default App;