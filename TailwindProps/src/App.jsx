import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card' 

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"JD",
    age:21
  }

  return (
    <>
     <h1 className='bg-purple-500 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
     {/* <Card channel="Tailwind" setobject={myobj} /> */}
     <Card username="Jack" btnText="Click Me"/>
     <Card username="JD" btnText="Visit Me"/>
    </>
  )
}

export default App
