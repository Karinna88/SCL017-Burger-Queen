import React, { useEffect } from "react";
import db from "../firebase/firebaseConfig";
import NavBar from "./NavBar";
import "../../src/css/Menu.css";
import { useParams } from "react-router-dom";


const Menu = () => {
  const { menu } = useParams();
  const [productList, setProductList] = React.useState([]);
  const [menus, setMenus] = React.useState([]);


  // se carga el menú
  useEffect(() => {
    db.collection("menu")
      .where("categoria", "==", menu)
      .onSnapshot((snapshot) => {
        setMenus(
          snapshot.docs.map((documento) => {
            return { ...documento.data(), id: documento.id };
          })
        );
      });
  }, []);

  // funcion para agregar nuevo producto
  const agregar = (item) => {
    console.log(item);
    const productListClone = [...productList]; //esto representa a todos los productos (nuevoproducto = clon)

    productListClone.push({ //agregar un producto 
      id: item.id,
      nombre: item.item,
      precio: item.precio,
      cantidad: 1,
      total: item.precio * 1,
    });

      setProductList(productListClone)

  };


  const eliminar = (id) => {
    let arrayFilter = productList.filter(item => item.id != id )
    setProductList(arrayFilter)
  }




  // Elemento:  Card y button
  return (
    <div>
      <div className="container">
        <NavBar />

        <div className="row">
          <div className="col-6">
            <div>
              {menus.map((item) => (
                <button
                  className="menuButton"
                  key={item.id}
                  onClick={(evento) => agregar(item)}
                >
                  <img
                    src={item.url}
                    alt="icono-producto"
                    className="iconButton"
                    width={50}
                  ></img>
                  <div className="product-text-button">
                    <p>{item.item}</p> <p>${item.precio}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Elemento:  tabla pedido */}

          <div className="col-6">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Total</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {productList.map((pedido, key) => (
                  <tr key={key}>
                    <th scope="row">{pedido.nombre}</th>
                    <td>{pedido.cantidad}</td>
                    <td>{pedido.total}</td>
                    <td>
                      <button onClick={(evento) => eliminar(pedido.id)} className="btn btn-danger">Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
