import { useEffect, useState } from "react"


function App() { 
  const[count, setCount] = useState(0)
//first type
useEffect(() =>{  //useEffect is a hook
console.log("First UseEffect was called") 
},[])  //[] : Dependency Array



//second type
useEffect (() =>{
  console.log("Count UseEffect was called")
}, [count])

  return (
<>
<h1>{count}</h1>
<button onClick={()=>setCount(count+1)}>+</button>
</>
    
  )
}

export default App
