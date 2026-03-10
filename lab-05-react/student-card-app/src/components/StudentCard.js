function StudentCard(props) {
  return (
    <div style={{
      backgroundColor: props.color,
      padding: "20px",
      margin: "15px",
      borderRadius: "10px",
      width: "250px"
    }}>
      <h2>{props.name}</h2>
      <p>Roll No: {props.rollNo}</p>
      <p>Department: {props.department}</p>
      <p>University: {props.university}</p>
    </div>
  );
}

export default StudentCard;