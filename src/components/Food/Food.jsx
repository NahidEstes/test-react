import React from "react";

const Food = (props) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props.food;
  const { addedToCart } = props.addedToCart;
  //   console.log(addedToCart);
  return (
    <div>
      <div className="shadow border">
        <img src={strCategoryThumb} alt="" />
        <h3>{strCategory}</h3>
        <p>{strCategoryDescription.slice(1, 100)}</p>
        <button onClick={() => addedToCart(props.food)}>Add to cart </button>
      </div>
    </div>
  );
};

export default Food;
