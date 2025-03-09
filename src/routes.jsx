import { createBrowserRouter } from "react-router-dom"; 


const router = createBrowserRouter([
    {
        path : '/',
        element : <h1>Hello, This is the home Page</h1>
    },
    {
        path : '/blog',
        element : <h1>Hello, This is Blog page</h1>
    }
])


export default router