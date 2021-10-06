import React, {Fragment} from "react";
import { NavLink } from "react-router-dom";
import almuerzo from '../../src/img/hamb-almuerzo.jpg';
import desayuno from '../../src/img/desayuno.jpg';
import '../css/Mesas.css';
import NavBar from "./NavBar"


const Mesas = () => {

  return (
    <Fragment>
      <NavBar />
      <div className="waiter-container">
        <h1 className="witer-title">Mesero</h1>
        <div className="cards-container">

          <NavLink to="/mesas/desayuno">
            <div className="space-down">
              <div className="card" style={{ width: '18rem' }}>
                <div className="container-breakfast">
                  <img src={desayuno} width="300" />
                  <div className="overlay">
                    <div className="text">Desayunos</div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
           <NavLink to="/mesas/almuerzo">
            <div className="space-up">
              <div className="card" style={{ width: '18rem' }}>
                <div className="container-lunch">
                  <img  src={almuerzo} width="300" />
                  <div className="overlay">
                    <div className="text">Almuerzos</div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink> 
        </div>
      </div>

    </Fragment>
  );
};
export default Mesas;


