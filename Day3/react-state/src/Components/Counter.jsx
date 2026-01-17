import { useState } from "react";



export default function Counter(){


let [count,setCount] = useState(0);

console.log("Component was rendered");


function increaseCount(){
    setCount((currCount)=>{
        return currCount+1;
    });
}

return(

<div>

<button onClick={increaseCount}>Count : {count}</button>


</div>


);
}

