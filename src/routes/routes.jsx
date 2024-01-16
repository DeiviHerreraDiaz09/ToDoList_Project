import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard/Dashboard"
import Prueba from "../pages/Prueba/Prueba"

const ToDolist = () => {
    return(

        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={ < Dashboard/> }></Route>
                <Route path="/prueba" element={ < Prueba/> }></Route>
            </Routes>
        
    
        </BrowserRouter>
      

    )

}

export { ToDolist }