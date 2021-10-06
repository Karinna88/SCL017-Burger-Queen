import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Componentes/Home";
import Mesas from "./Componentes/Mesas";
import Pedido from "./Componentes/Pedido";
import Almuerzo from "./Componentes/Almuerzos";
import Desayuno from "./Componentes/Desayunos";
import Error404 from "./Componentes/Error404";


const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
           
        <main>
          <Switch>
            <Route path="/" exact={true} component={Home} />
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
