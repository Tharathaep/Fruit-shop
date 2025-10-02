import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h2>ตะกร้าสินค้า</h2>
      {cart.length === 0 ? <p>ไม่มีสินค้าในตะกร้า</p> : (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              {item.name} - {item.price} บาท
              <button onClick={() => removeFromCart(item.id)}>ลบ</button>
            </div>
          ))}
          <button onClick={clearCart}>ล้างตะกร้า</button>
        </>
      )}
    </div>
  );
};

export default Cart;