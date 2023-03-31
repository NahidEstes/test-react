import React from "react";

const Test = ({ food, addToCart, bookMarkBtn }) => {
  //   console.log(props);

  const { name, age, country, readTime } = food;
  //   const { addedToCart } = props.addedToCart;
  //   console.log(addedToCart);
  return (
    <div>
      <div className="shadow border p-10">
        {/* <img src={strCategoryThumb} alt="" /> */}

        <p>{readTime} minutes to read</p>
        <h3 className="text-xl">{name}</h3>
        <p>Age: {age}</p>
        <button className="bg-sky-200 p-2" onClick={() => addToCart(name)}>
          Bookmark!!
        </button>
        <br></br>
        <button
          className="bg-orange-200 mt-2 p-2"
          onClick={() => bookMarkBtn(readTime)}
        >
          Read Time
        </button>
      </div>
    </div>
  );
};

export default Test;
