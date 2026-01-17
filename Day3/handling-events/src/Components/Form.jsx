

function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form was submitted");
}

function Form(){
    return(

        <>
        
        <form onSubmit={handleFormSubmit} action="#">
          <input type="text" placeholder="Write something"></input>

          <button>Submit</button>

        </form>
        
        </>

    );
}

export default Form;