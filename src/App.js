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

  const deleteProduct = async (id) => {
    const productsDoc = doc(db, "products", id);
    await deleteDoc(productsDoc);
    getProductsList();
  };

  const updateProductName = async (id) => {
    const productsDoc = doc(db, "products", id);
    await updateDoc(productsDoc, { name: updatedName });
    getProductsList();
  };

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
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>

      <div>
        <div>
          <h2>Nuevo producto</h2>
          <input
            placeholder="name"
            onChange={(e) => setNewProductsName(e.target.value)}
          />
          <input
            placeholder="price"
            onChange={(e) => setNewProductsPrice(Number(e.target.value))}
          />
          <input
            placeholder="stock"
            onChange={(e) => setNewProductsStock(Number(e.target.value))}
          />
          <button onClick={onSubmitTitle}>Enviar</button>
        </div>

        <div>
          {productsList.map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <p>{product.stock}</p>
              <div>
                <button onClick={() => deleteProduct(product.id)}>
                  Eliminar
                </button>
                <input
                  type="text"
                  placeholder="Nuevo nombre"
                  onChange={(e) => setUpdatedName(e.target.value)}
                />
                <button onClick={() => updateProductName(product.id)}>
                  Actualizar nombre
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
