import React, { Fragment } from 'react';
import { Link, NavLink } from "react-router-dom";
import '../../src/css/NavBar.css'
import Logo from '../../src/img/Logo111.png';


const NavBar = () => {

    return (
        <Fragment>
            <div className="navbar">
                <Link className="navbar-brand" to="/"><img src={Logo} alt="logo" width={80} /></Link>
                <div>
                    <div className="d-flex">
                        
                        <NavLink className="buttonnav" to="/waiter">
                            Mesas
                        </NavLink>

                        <NavLink className="buttonnav" to="/pedido">
                            Cocina
                        </NavLink>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NavBar;
