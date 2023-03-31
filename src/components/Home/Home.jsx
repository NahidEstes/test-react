import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";
import Test from "../Test/Test";

const Home = () => {
  const [foods, setFoods] = useState([]);

  const [carts, setCart] = useState([]);
  //   console.log(carts);
  const [readTime, setReadTime] = useState([]);

  const addToCart = (time) => {
    const newCarts = [...carts, time];
    setCart(newCarts);
  };

  const bookMarkBtn = (rTime) => {
    let totalReadTime = [...readTime, rTime];
    setReadTime(totalReadTime);
  };

  console.log(readTime);
  //   const addedToCart = (food) => {
  //     const getCart = carts.find((cart) => cart.idCategory === food.idCategory);
  //     if (!getCart) {
  //       const newCart = [...carts, food];
  //       console.log(newCart);
  //       setCart(newCart);
  //     }
  //   };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
    //   .then((data) => setFoods(data.categories));
  }, []);
  let sum = 0;
  readTime.map((rtime) => (sum += rtime));
  console.log(sum);
  return (
    <div className="flex">
      <div className="grid grid-cols-3 gap-3">
        {foods.map((food) => (
          <Test
            food={food}
            addToCart={addToCart}
            bookMarkBtn={bookMarkBtn}
          ></Test>
        ))}

        {/* {foods.map((food) => (
          <Food key={food.idCategory} food={food} addedToCart={addedToCart} />
        ))} */}
      </div>
      <div>
        <h3>Cart Summary</h3>
        <Cart rTime={sum} />
        {carts.map((cart) => (
          <Cart cart={cart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
