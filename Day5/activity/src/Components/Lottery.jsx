import { useState } from "react";


export default function Lottery(){


    let [ticket,setTicket] = useState(275);
    let [win,setWin] = useState(false);

    function getTicket(){

      let ticket =  Math.floor(Math.random()*900)+100;

      setTicket((prevTicket)=>{
        return prevTicket = ticket;

      });     

      
       let sum = 0;
       let tempticket = ticket;

       while(tempticket>0){
        let remainder = tempticket%10;
        sum+=remainder;
        tempticket = Math.floor(tempticket/10);

       }

       if(sum===15){
          setWin(()=>{
            return true;
          })
        
        }

       else{
            setWin(()=>{
                return false;
            })
        }

   
    
    }



    return (
    <div>

    {win?<p>Lottery 'Congratulation', you win</p>:<p>Lottery</p>}
    <p>Lottery Ticket : {ticket}</p>
    <button onClick={getTicket}>Get New Ticket</button>
        
        
        </div>
    );
}

