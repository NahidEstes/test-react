import React from "react";

const Cart = ({ cart, rTime }) => {
  return (
    <div>
      <h2>ReadTime: {rTime}</h2>
      <h2>{cart}</h2>
    </div>
  );
};

export default Cart;
