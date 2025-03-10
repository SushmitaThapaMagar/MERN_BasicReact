import { useEffect, useState } from "react"


function App() { 
  const[count, setCount] = useState(0)
  const[nextCount, setnextCount] = useState(0)


  useEffect(()=>{
    console.log("This useEffect was called")
  })
  return (
<>
<h1>{count}</h1>
<button onClick={()=>setCount(count+1)}>+</button>
<h1>{nextCount}</h1>
<button onClick={()=>setnextCount(nextCount+1)}>+</button>
</>
    
  )
}

export default App
