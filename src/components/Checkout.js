import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const handleCheckout = () => {
    alert("สั่งซื้อเรียบร้อย! (ตรงนี้สามารถต่อ Line API ได้)");
  };

  return (
    <div>
      <h2>สรุปการสั่งซื้อ</h2>
      {cart.map((item, index) => (
        <p key={index}>{item.name} - {item.price} บาท</p>
      ))}
      <button onClick={handleCheckout}>ยืนยันการสั่งซื้อ</button>
    </div>
  );
};

export default Checkout;