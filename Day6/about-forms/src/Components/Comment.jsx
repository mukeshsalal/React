import { useState } from "react";
import CommentForm from "./CommentForm";

export default function Comment(){

let [comments,setComment] = useState([{
    userName:"Hello",
    rating:4,
    remarks:"Wonderful",
}]);


let addNewComment = (Comment)=>{
    setComment((currComment)=>{
        return [...currComment,Comment];
    });
}

return (
<>
    <div>
    <h3>All Comments</h3>

    {
    
     comments.map((comment,index)=>(
    <div key={index}>
        <li>{comment.userName}</li>
        <li>{comment.remarks}</li>
        <li>{comment.rating}</li>
    </div>

     ))
    }
    </div>
   
   <hr></hr>
   
   <CommentForm addNewComment={addNewComment}/>
    
</>

    
)
}