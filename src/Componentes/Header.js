import { Link } from "react-router-dom";
import "../../src/css/Header.css";
import NavBar from "./NavBar";
import Logo from "../../src/img/Logo2.png";

const Header = () => {
  return (
    <div className="home-container">
      <div className="background-images">
        <div className="cardOverlay">
          <header>

          <nav>
              <NavBar />
            </nav>
            <div className="text-home-box">
              <img src={Logo} alt="logo" className="home-logo" />
              <div className="burger-text-container">
              <p className="burger-text">
                Toma tus pedidos y envialos a cocina en un click
              </p>
            </div>
            </div>

           

         
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
