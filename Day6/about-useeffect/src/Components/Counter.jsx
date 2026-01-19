import { useState,useEffect } from 'react';

function Counter() {
  const [countX, setCountX] = useState(0);
  const [countY, setCountY] = useState(0);


  let increaseCountX = ()=>{
    setCountX((prevCount)=>{
      return prevCount+1;
    })
  }
   let increaseCountY = ()=>{
    setCountY((prevCount)=>{
      return prevCount+1;
    })
  }

//  useEffect(function printSomething(){
//     console.log("This is side-effect");
//  });
  

 // Dependicies in useEffect (For particular State)

//   useEffect(function printSomething(){
//     console.log("This is side-effect");
//  },[countX]);

 // 1st time render m useEffect kaam krega

//  useEffect(function printSomething(){
//     console.log("This is side-effect");
//  },[]);


  return (
    <>

    <h3>Count = {countX}</h3>
    <button onClick={increaseCountX}>+1</button>

    
    <h3>Count = {countY}</h3>
    <button onClick={increaseCountY}>+1</button>


    </>
  )
}

export default Counter;
