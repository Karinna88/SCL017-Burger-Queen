import React from "react";
import styled from "styled-components";
import db from "./firebase/firebaseConfig";

const App = () => {
    const pedidos = () => {
        console.log("pedidos");
  
       db.collection('pedidos').add({
            nombre: 'Anne',
            mesa: 1,
            comentario: "Hola, Anne",
            item: [{
                producto: "hamburguesa",
                cantidad: 1,
                precio: 2000
            },
            {
                producto: "papas fritas",
                cantidad: 2,
                precio: 2000
            }
        ]
        })
    }
    return ( 
     <div>
         <h1>Pedidos Burger Queen</h1>
         <button onClick={() => pedidos()}>Realizar Pedido</button>
     </div>
     );
}
 
export default App;