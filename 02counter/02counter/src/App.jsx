import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {



  let  [counter , setCounter]= useState(15) //use state varibale gives us  ararya with two values begineer  and a function
// let counter = 15
let addvalue = ()=>{
  console.log("clicekd",counter)
  setCounter(counter+1) // counter me kya daluna
  counter = counter + 1;

}
let removevalue = ()=>{
  if(counter>1){
  setCounter(counter-1)
  }
  else{
    setCounter(0)
  }
}
  return (
    <>
    <h1> chai aur react </h1>
    <h2> Counter value:{counter} </h2>
    <button onClick={addvalue} >  Add value{counter} </button>
    <br></br>
    <button onClick={removevalue} >remove value{counter} </button>

    </>
  )
}

export default App
