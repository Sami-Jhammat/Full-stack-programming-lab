function CourseItem(props) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "15px",
      margin: "10px"
    }}>
      <h2>{props.courseName}</h2>
      <p>Instructor: {props.instructor}</p>
      <p>Duration: {props.duration}</p>
      <p>Type: {props.type}</p>
    </div>
  );
}

export default CourseItem;