import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard/Dashboard"

const ToDolist = () => {
    return(

        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={ < Dashboard/> }></Route>
            </Routes>
        
    
        </BrowserRouter>
      

    )

}

export { ToDolist }