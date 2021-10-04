import React, { useEffect } from "react";
import db from "../firebase/firebaseConfig";

const Desayuno = () => {


  const [pedidos, setPedidos] = React.useState([]);
  
  const [menus, setMenus] = React.useState([]);

  useEffect(() => {
    db.collection("menu")
      .where("categoria", "==", "desayuno")
      .onSnapshot((snapshot) => {
        setMenus(
          snapshot.docs.map((documento) => {
            return { ...documento.data(), id: documento.id };
          })
        );
      });

  }, []);


  const agregar = (item) => {
    console.log(item)
 
      let pedido = {
        nombre: item.item,
        cantidad: 1,
        total: item.precio*1
      }

    setPedidos([
      ...pedidos, pedido
    ])
  };

  
  return (
    <div>
      <div className="container">
        <h1>Menú Desayunos</h1>
        <div className="row">
          <div className="col-6">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {menus.map((item) => (
                <div key={item.id} className="col">
                  <div className="card h-100">
                    <img
                      src={item.url}
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">{item.item}</h5>
                      <button
                        onClick={() => {
                          agregar(item);
                        }}
                        className="btn btn-primary"
                      >
                        Añadir
                      </button>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">${item.precio}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>



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
                {
                   pedidos.map((pedido, key) => (
                  <tr key={key}>
                    <th scope="row">{pedido.nombre}</th>
                    <td>{pedido.cantidad}</td>
                    <td>{pedido.total}</td>
                    <td>
                      <button className="btn btn-danger">Eliminar</button>
                    </td>
                  </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desayuno;
