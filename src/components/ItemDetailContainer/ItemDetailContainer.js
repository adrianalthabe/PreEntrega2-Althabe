import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, 'products', itemId);

    getDoc(docRef)
      .then(response => {
        if (response.exists) {
          const data = response.data();
          const productAdapted = { id: response.id, ...data };
          setProduct(productAdapted);
        } else {
          console.log("No such document!");
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [itemId]);

  if (loading) {
    return <h2>Cargando producto...</h2>; // Mostrar un mensaje mientras se carga el producto
  }

  return product ? <ItemDetail {...product} /> : <h2>Producto no encontrado</h2>;
};

export default ItemDetailContainer;

