import { useState,useEffect } from 'react'
import './App.css'
import Counter from './Components/Counter'
import Jokes from './Components/Jokes'
function App() {
 

  return (

    <>

    <Counter/>
    <Jokes/>

    {/* <h3>Count = {count}</h3>
    <button onClick={increaseCount}>+1</button> */}


    </>
  )
}

export default App
