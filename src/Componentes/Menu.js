import React, { useEffect } from "react";
import db from "../firebase/firebaseConfig";
import NavBar from "./NavBar";
import "../../src/css/Menu.css";
import { useParams } from "react-router-dom";

const Menu = () => {
  const { menu } = useParams();
  const [productOrderList, setProductOrderList] = React.useState([]);
  const [menus, setMenus] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [cliente, setCliente] = React.useState('');
  const [mesa, setMesa] = React.useState('');
  const [comentario, setComentario] = React.useState('');

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
  const addProductOrder = (item) => {
    const productListClone = [...productOrderList]; //nuevoproducto = clon

    const productOrderFound = productOrderList.filter((product) => {
      return product.id == item.id;
    });

    if (productOrderFound.length > 0) {
      productListClone.forEach((product, index) => {
        if (product.id == item.id) {
          let quantity = productListClone[index].cantidad;
          let price = productListClone[index].precio;

          productListClone[index].cantidad = quantity + 1;
          productListClone[index].total = price * (quantity + 1);
        }
      });
    } else {
      productListClone.push({
        //agregar un producto
        id: item.id,
        nombre: item.item,
        precio: item.precio,
        cantidad: 1,
        total: item.precio * 1,
      });
    }
    setProductOrderList(productListClone);
    calcularTotal(productListClone);
  };

  const eliminarProductoPedido = (id) => {
    let arrayFilter = productOrderList.filter((item) => item.id != id);
    setProductOrderList(arrayFilter);
    calcularTotal(arrayFilter);
  };

  const sumarCantidad = (productPedido) => {
    let productListClone = [...productOrderList];

    productListClone.forEach((product, index) => {
      if (product.id == productPedido.id) {
        let quantity = productListClone[index].cantidad;
        let price = productListClone[index].precio;

        productListClone[index].cantidad = quantity + 1;
        productListClone[index].total = price * (quantity + 1);
      }
    });
    setProductOrderList(productListClone);
    calcularTotal(productListClone);
  };

  const restarCantidad = (productPedido) => {
    if (productPedido.cantidad > 0) {
      let productListClone = [...productOrderList];

      productListClone.forEach((product, index) => {
        if (product.id == productPedido.id) {
          let quantity = productListClone[index].cantidad;
          let price = productListClone[index].precio;

          productListClone[index].cantidad = quantity - 1;
          productListClone[index].total = price * (quantity - 1);
        }
      });
      setProductOrderList(productListClone);
      calcularTotal(productListClone);
    }
  };

  const calcularTotal = (productList) => {
    let total = 0;
    productList.forEach((item) => {
      total = total + item.total;
    });
    setTotal(total);
  };


  const onSubmit = (evento) => {
    evento.preventDefault();
    
    db.collection('pedidos').add({
      nombre: cliente,
      mesa: mesa,
      comentario: comentario,
      detalles: productOrderList
    })
    .then(() =>{
      console.log('Se agrego correctamente el pedido');

      setCliente('');
      setMesa('');
      setComentario('');
      setProductOrderList([]);
      setTotal(0);


    })
    .catch((err) => {
      console.log(err);
  })
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
                  onClick={(evento) => addProductOrder(item)}
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
          <form action='' onSubmit={onSubmit}>
            <table className="table mt-4">
              <tr>
                <td>
                  <b>Datos Cliente </b>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={cliente}
                    name="cliente"
                    onChange={(evento) => setCliente(evento.target.value)}
                    placeholder="Nombre Cliente"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={mesa}
                    name="mesa"
                    onChange={(evento) => setMesa(evento.target.value)}
                    placeholder="N° Mesa"
                  />
                </td>
              </tr>
            </table>

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
                {productOrderList.map((pedido, key) => (
                  <tr key={key}>
                    <td scope="row">{pedido.nombre}</td>
                    <td>
                      <button type="button"
                        onClick={(resta) => restarCantidad(pedido)}
                        className="btn"
                      >
                        {" "}-{" "}
                      </button>
                      {pedido.cantidad}
                      <button type="button"
                        onClick={(suma) => sumarCantidad(pedido)}
                        className="btn"
                      >
                        {" "}+{" "}
                      </button>
                    </td>

                    <td>{pedido.total}</td>
                    <td>
                      <button
                        onClick={(evento) => eliminarProductoPedido(pedido.id)}
                        className="btn btn-danger"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    {" "}
                    <b>Total = </b>
                    {total}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>

            <div className="form-group">
              <textarea
                className="form-control"
                name="comentario"
                rows="5"
                placeholder="Comentario adicional"
                onChange={(evento) => setComentario(evento.target.value)}
                value={comentario}
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit"  className="btn-cocina">Enviar a Cocina</button>
            </div>

              </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
