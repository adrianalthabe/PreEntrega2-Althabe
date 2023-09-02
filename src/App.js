import "bulma/css/bulma.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Auth from "./components/Auth";
import { db } from "./config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Checkout from './components/Checkout/Checkout';


import "./App.css";
import { CartProvider } from "./context/CartContext";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [newProductsName, setNewProductsName] = useState("");
  const [newProductsPrice, setNewProductsPrice] = useState(0);
  const [newProductsStock, setNewProductsStock] = useState(0);
  const [updatedName, setUpdatedName] = useState("");

  const productsCollectionRef = collection(db, "products");

  const getProductsList = async () => {
    const data = await getDocs(productsCollectionRef);

    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));

    setProductsList(filteredData);
  };

  useEffect(() => {
    getProductsList();
  }, []);

  const onSubmitTitle = async () => {
    await addDoc(productsCollectionRef, {
      name: newProductsName,
      price: newProductsPrice,
      stock: newProductsStock
    });
    getProductsList();
  };

  // Se eliminan varias funciones y se alojan en ReportWebVitals.js 
  // Personalmente las retiro por riesgo a borrar datos en Firebase
  // listas para pegar aqui en App.js y funcionaran perfectamente
  // usted podra borrar items , actualizarlos, cambiarles el nombre y agregar productos.
  

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <CartProvider>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "10vh"
            }}
          >
            <Auth />
          </div>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} / >
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
{

}
    </div>
  );
}

export default App;
