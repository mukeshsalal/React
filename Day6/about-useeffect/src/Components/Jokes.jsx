import { get } from "mongoose";
import { useEffect, useState } from "react";

export default function Jokes(){

    const URL = "https://official-joke-api.appspot.com/random_joke";

    let [joke,setJoke] = useState({});

 
    async function getJokes() {
        let response =  await fetch(URL);
        let result =  await response.json();
        console.log(result);
        setJoke({setup:result.setup,punchline:result.punchline});
        
    }
 
    useEffect(()=>{async function getFirstJoke(){

        let response =  await fetch(URL);
        let result =  await response.json();
        console.log(result);
        setJoke(()=>{
        return {setup:result.setup,punchline:result.punchline} 
    });

}
    getFirstJoke();


},[]);




    return(

        <>

         <h2>Jokes</h2>
         <br></br>
         <br></br>


         <h2>{joke.setup}</h2>
         <h2>{joke.punchline}</h2>
         <button onClick={getJokes}>Get Joke</button>
        
        </>
    )
}