import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue=()=>{
    console.log("Clicked!!",count)
    setCount(count+1)
  }

  const removeValue=()=>{
    console.log("Clicked!!",count)
    setCount(count-1)
  }

  return (
    <>
      
      <h1>Hello World!!</h1>
      <h3>Counter Value:{count}</h3>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      
    </>
  )
}

export default App
