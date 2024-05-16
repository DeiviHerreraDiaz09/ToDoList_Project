import "./Dashboard.css";
import Header from "../../components/Header/Header";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

const Dashboard = () => {
  const [tareas, setTareas] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAgregarTarea = () => {
    if (inputValue.trim() !== "") {
      setTareas([...tareas, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="dashboard">
      <div className="columna">
        <Header></Header>
      </div>
      <div className="columnados">
        <div className="encabezado">
          <h2 className="msg">Things To Do</h2>
          <h3 className="msg">Buenas días, Deivi 👋</h3>
        </div>

        <div className="notes">
          {tareas.length > 0 ? (
            tareas.map((tarea, index) => (
              <div key={index} className="tarea">
                <h3>
                  {index + 1} - {tarea}
                </h3>
              </div>
            ))
          ) : (
            <div className="notFoundTask">
              <h3>
                No existen asignaciones pendientes, te invitamos a iniciar la
                redacción de una.
              </h3>
            </div>
          )}
        </div>

        <div className="buscador">
          <input
            type="text"
            placeholder="Escribe tu tarea aquí"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleAgregarTarea}>Agregar</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
