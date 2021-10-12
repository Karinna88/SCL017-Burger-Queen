import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import almuerzo from "../../src/img/hamb-almuerzo.jpg";
import desayuno from "../../src/img/desayuno.jpg";
import "../css/WaiterView.css";
import NavBar from "./NavBar";

const WaiterView = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="waiter-container">
        <h1 className="witer-title">Mesero</h1>
        <div className="cards-container">
          <NavLink to="/waiter/desayuno">
            <div class="card">
              <img
                src={desayuno}
                className="card-img-top"
                width="400"
                alt="desayuno"
              />
              <div class="card-body">
                <p class="card-text">Ir a desayunos</p>
              </div>
            </div>
          </NavLink>

          <NavLink to="/waiter/almuerzo">
            <div class="card">
              <div class="card-body">
                <p class="card-text">Ir a almuerzos</p>
              </div>
              <img
                src={almuerzo}
                className="card-img-top"
                width="400"
                alt="desayuno"
              />
            </div>
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};
export default WaiterView;
