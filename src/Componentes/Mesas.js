import { Link } from "react-router-dom";


const Mesas = () => {
    return ( 
    <div>
        <h1>Mesas</h1>

        <div>
        <Link  to="/mesas/desayuno">Desayunos</Link>
        <Link  to="/mesas/almuerzo">Almuerzos</Link>
        </div>
      </div> );
}
 
export default Mesas;