import React, { useState, useEffect, useContext } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { CartContext } from "../CartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>สินค้าทั้งหมด</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={p.image} alt={p.name} width="100" />
            <h3>{p.name}</h3>
            <p>{p.price} บาท</p>
            <button onClick={() => addToCart(p)}>ใส่ตะกร้า</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
