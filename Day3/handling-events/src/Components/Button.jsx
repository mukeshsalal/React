
import "./Button.css";


// Handling Click And Non Click event
// function sayHello(){
//     document.body.style.backgroundColor = "blue";
// }

// function sayBye(){
//     document.body.style.backgroundColor = "red";
// }

// function mouseLeave(){
//      document.body.style.color = "black";
// } 

// function mouseEnter(){
//     document.body.style.color = "brown";
// }


// Event Object (We can access the Event object in Handler)

function sayHello(event){
    console.log(event); 
    document.body.style.backgroundColor = "blue";
}

function sayBye(event){
    console.log(event);
    document.body.style.backgroundColor = "red";
}

function mouseLeave(event){
     console.log(event);
     document.body.style.color = "black";
} 

function mouseEnter(event){
    console.log(event);
    document.body.style.color = "brown";
}



// Component

function Button(){

    return(
<div>

  <button onClick={sayHello}>Click me </button>
  <p onDoubleClick={sayBye}>Event Listeners</p> 

  <p onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo veritatis eos maxime sit hic harum ipsa nobis nemo, facilis obcaecati at adipisci, corrupti nulla laudantium. Reprehenderit quaerat temporibus repudiandae!</p>

 </div>


    );
}

export default Button;