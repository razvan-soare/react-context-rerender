import React, { useState } from "react";
import useStore from "../store/useStore";

const AddItem = () => {
  const { addToCart } = useStore();
  const [counter, setCounter] = useState(1);

  const handleAddToCart = () => {
    // Add the new book to the global store
    addToCart({
      name: `Book ${counter}`,
      id: counter,
    });
    // Incremente with 1
    setCounter((e) => e + 1);
  };
  return <button onClick={handleAddToCart}>Add Book To Cart</button>;
};

export default AddItem;
