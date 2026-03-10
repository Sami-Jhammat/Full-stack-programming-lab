function Greeting(props) {

  let message = "";

  if(props.timeOfDay === "morning"){
    message = "Good Morning";
  }
  else if(props.timeOfDay === "afternoon"){
    message = "Good Afternoon";
  }
  else{
    message = "Good Evening";
  }

  return(
    <div style={{
      backgroundColor: props.bgColor,
      padding:"20px",
      margin:"10px"
    }}>
      <h2>{message}, {props.name}</h2>
    </div>
  );
}

export default Greeting;