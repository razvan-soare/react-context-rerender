import React from "react";
import useStore from "../store/useStore";

const DisplayCart = () => {
  const { cart } = useStore();
  return (
    <React.Fragment>
      <h2>Cart items</h2>
      {cart.map((cartItem) => (
        <h4 key={cartItem.id}>{cartItem.name}</h4>
      ))}
    </React.Fragment>
  );
};

export default DisplayCart;
