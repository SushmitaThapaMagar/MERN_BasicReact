
import Home from './Home'
import Blog from './Blog'
import Contact from './Contact'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { use, useState } from 'react'

function App() { //Functional base
const [count, setCount] = useState(0)
const [name, setName] =useState("Thapa Magar")


  return (
<>
<h1>{count}</h1>
<button onClick={()=> setCount(count +1)}>+</button>
<button onClick={()=> setCount(count -1)}>-</button>
<h1>{name}</h1>
<button onClick={()=> setName("Sushmita Thapa Magar")}>Change Name</button>
</>
    
  )
}

export default App
