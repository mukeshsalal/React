
import { use } from "react";
import { useState } from "react";
import { v4 as uuid4} from "uuid";

export default function TodoList(){


    let [todos,setTodos] = useState([{task:"sampleTask",id:uuid4()}]);
    let [inputVal,setInputVal] = useState("");

    function HandleInputValue(event){
        console.log(event.target.value);
       setInputVal(event.target.value);
    }

    function addTask(event){
        event.preventDefault();
        setTodos((prevTodo)=>{
        // console.log(event.target[0].value);
        return [...prevTodo,{task:inputVal,id:uuid4()}];
        });
        setInputVal("");
       
    }

    function deleteTask(id){
        // console.log(id);
        // let filterTask = task.filter((todo)=>todo.id!=id);
        // console.log(filterTask);
        setTodos((prevTodo)=>{
            return prevTodo.filter((todo)=>todo.id!=id);
        });
    }


    function UpperCaseAll(){

        setTodos((prevTodos)=>{
        return prevTodos.map((todo)=>{
                return {
                    ...todo,task:todo.task.toUpperCase()
                }
            });
        });
    }

        
    function UpperCaseParticularTask(id){

          function UpperCaseAll(){

        setTodos((prevTodos)=>{
        return prevTodos.map((todo)=>{
                return {
                    ...todo,task:todo.task.toUpperCase()
                }
            });
        });
    }
    }


    return(

    <div>

    <h2>Todo List</h2>

    <input type="text" placeholder="Enter Task" value={inputVal}onChange={HandleInputValue}></input>
    &nbsp;
    &nbsp;
    <button onClick={addTask}>Add Task</button>

    <hr/>
    <p>Task to do </p>
   <ul>

    {todos.map((todo)=>(
        <li key={todo.id}>
          <span>{todo.task}</span>
          &nbsp; &nbsp; &nbsp;
          <button onClick={()=>deleteTask(todo.id)}>Delete</button>
          &nbsp;
          <button onClick={()=>UpperCaseParticularTask(todo.id)}>UpperCase</button>
      </li>
))}


   </ul>


   <button onClick={UpperCaseAll}>UpperCase</button>


    </div>

    );
}



