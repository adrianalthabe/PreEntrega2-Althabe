import React, { useState, useContext } from 'react';
import { db } from '../../services/firebase/firebaseConfig';
import { writeBatch, Timestamp, collection, addDoc } from 'firebase/firestore';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { CartContext } from '../../context/CartContext';
import './Checkout.css'; 

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        const orderData = {
            buyer: {
                name,
                phone,
                email
            },
            items: cart,
            total: total,
            date: Timestamp.fromDate(new Date())
        };

        try {
            const ordersCollectionRef = collection(db, 'orders');
            const docRef = await addDoc(ordersCollectionRef, orderData);

            setOrderId(docRef.id);
            clearCart(); // Limpiar el carrito después de crear la orden
        } catch (error) {
            console.error('Error al crear la orden:', error);
        }

        setLoading(false);
    };

    if (loading) {
        return <h1 className="LoadingMessage">Se está generando su orden...</h1>;
    }

    if (orderId) {
        return <h1 className="OrderIdMessage">El id de su orden es: {orderId}</h1>;
    }

    return (
        <div className="CheckoutContainer">
            <h1>Checkout</h1>
            <div className="CheckoutFormContainer">
                <CheckoutForm onConfirm={createOrder} />
            </div>
        </div>
    );
};

export default Checkout;
