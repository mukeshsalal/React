import { useState } from "react";
export default function CommentForm({addNewComment}){

let [formData,setFormData] = useState({
userName:"",
remarks:"",
rating:5,

});

let handleInput = (event)=>{

    setFormData((currData)=>{

        return {...currData,[event.target.name]:event.target.value}
    })
}

let handleSubmit = (event)=>{
    event.preventDefault();
    console.log(formData);
    addNewComment(formData);
    setFormData({
      userName:"",
      remarks:"",
      rating:5,

    })
}

return(
<>

<h4>Give a Feedback</h4>

<form onSubmit={handleSubmit}>
<input type="text" placeholder="username" value={formData.userName}name="userName" onChange={handleInput} />
<br/><br/>

<textarea name="remarks" value={formData.remarks} onChange={handleInput} placeholder="remarks">Remarks
</textarea>
<br/><br/>

<input placeholder="Enter rating" type="number" value={formData.rating}  name="rating" onChange={handleInput} max={5}/>

<button>Submit</button>
</form>

</>
);


}