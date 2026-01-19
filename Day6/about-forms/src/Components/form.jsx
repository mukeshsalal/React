import { useState } from "react";


export default function Form(){


    // let [fullName,setFullName] = useState("");
    // let [userName,setUserName] = useState("");



    // let handleNameChange = (event)=>{
    //     console.log(event.target.value);
    //     setFullName(event.target.value);
    // };

    // let handleuserNameChange = (event)=>{
    //     console.log(event.target.value);
    //     setUserName(event.target.value);
    // };

    let [formData,setFormData] = useState({fullName:"",userName:"",passWord:""});


    let  handleInputChange = (event)=>{

        let fieldName = event.target.name;
        let newValue = event.target.value;
        // console.log(fieldName);
        // console.log(newValue);

        setFormData((currData)=>{
            // currData[fieldName] = newValue;
            return {...currData,[fieldName]:newValue};

        });



    };

    let handleSubmit = (event)=>{
        event.preventDefault();
        setFormData({
         fullName:"",
         userName:"",
         passWord:"",
        });

    }

    return(

        <>
        
        {/* <h1>About Form</h1>
        <form>
         <label htmlFor="fullname">Full Name</label>
         &nbsp;
         &nbsp;
        <input type="text" placeholder="Enter full name" value={fullName} onChange={handleNameChange} id="fullname"/>
        &nbsp;

<br/><br/><br/>

        <label htmlFor="username">UserName</label>
         &nbsp;
         &nbsp;
        <input type="text" placeholder="Enter username" value={userName} onChange={handleuserNameChange} id="username"/>
        &nbsp;

<br/><br/> */}

        {/* <button>Submit</button>

        </form> */}
        


        <form onSubmit={handleSubmit}>

        <label htmlFor="fullname">Enter Full Name</label>
        &nbsp;
        <input type="text" placeholder="Enter full name" value={formData.fullName} onChange={handleInputChange} id="fullname" name="fullName"/>

<br/> <br/>

         <label htmlFor="userName">Enter UserName</label>
        <input type="text" placeholder="Enter Username name" value={formData.userName} onChange={handleInputChange} id="userName" name="userName"/>

<br/> <br/>

         <label htmlFor="passWord">Enter Password</label>
        <input type="password" placeholder="Enter Password" value={formData.passWord} onChange={handleInputChange} id="passWord" name="passWord"/>

<br/> <br/>


       <button>Submit</button>

        </form>
        </>
    );

}


