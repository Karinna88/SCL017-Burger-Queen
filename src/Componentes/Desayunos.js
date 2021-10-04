import React, { useEffect } from "react";
import db from "../firebase/firebaseConfig";

const Desayuno = () => {
  const [menus, setMenus] = React.useState([]);

  useEffect(() => {
    db.collection("menu").onSnapshot((snapshot) => {
      setMenus(
        snapshot.docs.map((documento) => {
          return { ...documento.data(), id: documento.id };
        })
      );
    });
  }, []);

  console.log(menus);

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
                            <img src={item.url} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                              <h5 className="card-title">{item.item}</h5>
                            </div>
                            <div className="card-footer">
                              <small className="text-muted">${item.precio}</small>
                            </div>
                        </div>
                    </div>
                  ))
                    
                    }
                </div>
                </div>
                <div className="col-6">
                      PEDIDO....
                </div>
         </div>
      </div>
      
      {menus.map((item) => (
        <div key={item.id}>
          <p>{item.precio}</p>
          <p>{item.categoria}</p>
          <p>{item.item}</p>
          <img src={item.url}></img>
        </div>
      ))}
    </div>
  );
};

export default Desayuno;
