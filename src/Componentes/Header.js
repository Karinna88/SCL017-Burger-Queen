import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <h1>Burger Queen</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/mesas">Mesas</Link>
        <Link to="/pedido">Pedido</Link>
      </nav>
    </header>
  );
};

export default Header;
