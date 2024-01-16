import './Dashboard.css';
import Header from '../../components/Header/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Dashboard = () => {
	return (
	<div className='dashboard'>
		
		<div className="columna">
			
				<Header></Header>
			</div>

			<div className="columnados">
				<h2 className='msg'>Things To Do</h2>
				<h3 className='msg'>Buenas días, Deivi &#x1F44B;</h3>

				
				<div className="cardContent">
					<i className="fas fa-list-ul" style={{ color: '#ffffff'}}></i>
					<h6>!Parece que no tienes <br /> tareas por hacer!</h6>
					<i className="fas fa-list-ul" style={{ color: '#ffffff' }}></i>
					<h6>Agrega una nueva tarea</h6>
				</div>


				<div className="buscador">
					<div className="contenido">
						<input type="text" placeholder='¿Qué hay que hacer?'/>
						<button className='boton'>Agregar</button>
					</div>
				</div>


			</div>



	</div>
	);
};

export default Dashboard;