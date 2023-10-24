import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0);

  const addValue = ()=>{
   setCounter(counter+1)

  }
  const removeValue = ()=>{
    setCounter(counter-1)

  
      
  }

  const handleResetValue = ()=>{
    setCounter(counter===0)
      }
    
      let [color,setColor] = useState('red')
    
      const handleChangeBackground = ()=>{
        const colors = ["gray","pink", "blue", "red", "yellow", "orange","green","brown"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setColor(randomColor);
      }
  return (
    
    <>

    <div style={{backgroundColor: color,borderRadius:"1rem"}}>

     <h1>Chai Aur React</h1>
     <h2>Counter Value: {counter}</h2>
     <button className='btn'onClick={addValue} >Add Value</button>
     <button className='btn'onClick={removeValue}>Remove Value</button>
     <button className='btn'onClick={handleResetValue}>Reset Value</button>
     <button className='btn'onClick={handleChangeBackground}>Change Bg</button>
   </div>
    </>
  
  )
}
export default App
