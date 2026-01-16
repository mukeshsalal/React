import "./App.css";
// Simple Import
import Title from "./Components/Title";
// // Named Import (To import multiple Values)
// import {Title} from "./Components/Title";
import Description from "./Components/Description";

function App(){
  return (
  <div className="MainBox">
    {/* <h1>This is my app Component</h1> */}
    {/* <p>Inside App component we have :</p> */}
 {/* // Title Component. (We write Component Like Html Tag) */}
    <Title/> 
    <Description/>
    <Title/>
    <Description/>
    {/* In JSX all Html Tags Should be closed */}
    <img/> 

   <p>{2+2}</p> 
   <p>{"mukesh".toUpperCase()}</p>

</div>


  );
}

export default App;

