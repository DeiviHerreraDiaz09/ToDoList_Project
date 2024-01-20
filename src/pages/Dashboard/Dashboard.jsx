import './Dashboard.css';
import Header from '../../components/Header/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, useEffect } from 'react';

const Dashboard = () => {
    const [tarea, setTarea] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const login = (event) => {
        event.preventDefault(); 
        setTarea(prevTareas => [inputValue, ...prevTareas]); 
        setInputValue(""); 
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value); 
    }

    useEffect(() => {
        localStorage.setItem("tarea", JSON.stringify(tarea)) 
    }, [tarea])

    useEffect(() => {
        const tareasGuardadas = localStorage.getItem("tarea");
        if (tareasGuardadas) {
            setTarea(JSON.parse(tareasGuardadas));
        }
    }, [])

    return (
        <div className='dashboard'>
            <div className="columna">
                <Header></Header>
            </div>
            <div className="columnados">
                <h2 className='msg'>Things To Do</h2>
                <h3 className='msg'>Buenas días, Deivi 👋</h3>
				<form onSubmit={login} className='buscador'>
                {/* <div className="cardContent">
                    <i className="fas fa-list-ul" style={{ color: '#ffffff'}}></i>
                    <h6>!Parece que no tienes <br /> tareas por hacer!</h6>
                    <i className="fas fa-list-ul" style={{ color: '#ffffff' }}></i>
                    <h6>Agrega una nueva tarea</h6>
                </div> */}

                {tarea.slice(0, 10).map((tarea, index) => (
                    <h2 key={index}>  {tarea} </h2>
                ))}

                    
                        <div className="contenido">
                            <input type="text" name='tarea' placeholder='¿Qué hay que hacer?' onChange={handleInputChange} value={inputValue}/>
                            <button type='submit' className='boton'>Agregar</button>
                        </div>
                
                </form>
            </div>
        </div>
    );
};

export default Dashboard;
