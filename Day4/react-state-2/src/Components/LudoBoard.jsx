import { useState } from "react"


export default function LudoBoard(){
    let [moves,setMoves] = useState({blue:0,yellow:0,green:0});

    let [arr,setArr] = useState(["no moves"]);

    function updateBlue(){
        // moves.blue +=1;
        setMoves((moves)=>{
        // Bcz in Object address does not change so we have to spread this.
           return {...moves,blue:moves.blue+1};
        });
       
        setArr((arr)=>{
            return [...arr,"blue moves"];
        })
        
        console.log(arr);
      
    }

     function updateYellow(){
        // moves.blue +=1;
        setMoves((moves)=>{
           return {...moves,yellow:moves.yellow+1};
        });
    }
     function updateGreen(){
        // moves.blue +=1;
        setMoves((moves)=>{
          
           return {...moves,green:moves.green+1};
        });
    }
 
return(
    <div>
        <h1>Ludo Board</h1>
        <div className="board">
          <p>Blue Moves = {moves.blue}</p>
          <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
          <p>Yellow Moves ={moves.yellow} </p>
          <button style={{backgroundColor:"yellow",color:"black"}}  onClick={updateYellow}>+1</button>
          <p>Green Moves ={moves.green} </p>
          <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
        </div>

    </div>
);

}