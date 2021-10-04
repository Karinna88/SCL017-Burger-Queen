import React from "react";
import styled from "styled-components";
import db from "./firebase/firebaseConfig";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Componentes/Header";
import Inicio from "./Componentes/Inicio";
import Mesas from "./Componentes/Mesas";
import Pedido from "./Componentes/Pedido";
import Almuerzo from "./Componentes/Almuerzos";
import Desayuno from "./Componentes/Desayunos";
import Error404 from "./Componentes/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <div>
            <Header />
        <main>
          <Switch>
            <Route path="/" exact={true} component={Inicio} />
            <Route path="/mesas" exact={true} component={Mesas} />
            <Route path="/pedido" exact={true} component={Pedido} />
            <Route path="/mesas/desayuno" exact={true} component={Desayuno} />
            <Route path="/mesas/almuerzo" exact={true} component={Almuerzo} />
            <Route component={Error404} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
