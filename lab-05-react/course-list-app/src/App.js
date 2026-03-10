import CourseItem from "./components/CourseItem";

function App() {

  const courses = [
    {courseName:"Web Development", instructor:"Mr Ahmad", duration:"3 Months", type:"Online"},
    {courseName:"Database Systems", instructor:"Dr Ali", duration:"2 Months", type:"Offline"},
    {courseName:"Machine Learning", instructor:"Dr Hina", duration:"5 Months", type:"Online"},
    {courseName:"Operating Systems", instructor:"Mr Hamza", duration:"4 Months", type:"Offline"},
    {courseName:"Data Structures", instructor:"Ms Sara", duration:"3 Months", type:"Online"}
  ];

  return (
    <div>

      <h1>Course List</h1>

      {courses.map((course,index) => (
        <CourseItem
          key={index}
          courseName={course.courseName}
          instructor={course.instructor}
          duration={course.duration}
          type={course.type}
        />
      ))}

    </div>
  );
}

export default App;