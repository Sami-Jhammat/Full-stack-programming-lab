import Greeting from "./components/Greeting";

function App(){
  return(
    <div>

      <Greeting name="Ali" timeOfDay="morning" bgColor="lightyellow"/>
      <Greeting name="Sara" timeOfDay="afternoon" bgColor="lightpink"/>
      <Greeting name="Ahmed" timeOfDay="evening" bgColor="lightblue"/>

    </div>
  );
}

export default App;