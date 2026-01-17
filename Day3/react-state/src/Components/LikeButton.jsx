import { useState } from "react";

function start(){
    console.log("game started");
    return Math.random();
}

export default function LikeButton(){

let [isLiked,setisLiked] = useState(false);
// let [count,setCount] = useState(0);

// let [count,setCount] = UseState(start); // Initialization
console.log("Component was rendered");


function toggleLike(){
    
    setisLiked(!isLiked);
    // if(!isLiked){
    //     setCount(count+1)
    // }
}

// function increaseCount(){
//     setCount((currCount)=>{
//         return currCount+1;
//     });
//     setCount((currCount)=>{
//         return currCount+1;
//     });
// }

return(

<div>

<p onClick={toggleLike}>{isLiked ? (<i class="fa-solid fa-heart" style={{color:"red"}}></i> ) : (<i className="fa-regular fa-heart"></i> )} </p>

{/* <button onClick={toggleLike}>Count : {count}</button>
 */}

</div>


);
}