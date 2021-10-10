import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Componentes/Home";
import WaiterView from "./Componentes/WaiterView";
import Menu from "./Componentes/Menu";
import Error404 from "./Componentes/Error404";


const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
           
        <main>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/waiter" exact={true} component={WaiterView} />
            {/* <Route path="/pedido" exact={true} component={Pedido} /> */}
            <Route path="/waiter/:menu" exact={true} component={Menu} />
            <Route component={Error404} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
