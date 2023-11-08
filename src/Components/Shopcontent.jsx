import React, { useState, useEffect } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Switch, Space, message } from "antd";
import { useCount } from "../CountContext";
import { useProductCounts } from "../ProductCountsProvider";
import { useWish } from "../WishContext";
import { useCart } from "../CartContext";

const Shopcontent = () => {
  const pictures = [
    "Specs1.png",
    "Specs2.png",
    "Specs3.png",
    "Specs4.png",
    "Specs5.png",
    "Specs6.png",
  ];
  const prodnames = [
    "Breezy Gaze",
    "Nimble Vision",
    "Lithe lenses",
    "Floating Frames",
    "Effortless Elegance",
    "Light Special",
  ];
  // const [productCounts, setProductCounts] = useState(Array(pictures.length).fill(0));
  const { productCounts, setProductCounts } = useProductCounts();
  const { count, setCount } = useCount(0);
  const { wish, setWish } = useWish();
  const [messageApi, contextHolder] = message.useMessage();
  const { cart, addToCart } = useCart();

  const increase = (index) => {
    const newCounts = [...productCounts];
    newCounts[index]++;
    setProductCounts(newCounts);
    console.log(productCounts);
  };

  const decline = (index) => {
    const newCounts = [...productCounts];
    newCounts[index] = Math.max(newCounts[index] - 1, 0);
    setProductCounts(newCounts);
    // setCount(newCounts[index])
  };
  const addtoCart = (data, id, quantity) => {
    const newCounts = [...productCounts];
    if (newCounts[id] != 0) {
      setCount(() => {
        var sum = 0;
        for (var i = 0; i < newCounts.length; i++) {
          sum = sum + newCounts[i];
        }
        console.log(newCounts);
        messageApi.open({
          type: "success",
          content: "Added to Cart",
        });
        return sum;
      });
      addToCart({
        image: data,
        prodnam: prodnames[id],
        quantity: quantity[id],
      });
    }
  };
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  const addWish = (data, id) => {
    setWish((prevValue) => {
      return [...prevValue, { image: data, prodnam: prodnames[id] }];
    });
    messageApi.open({
      type: "success",
      content: "Added to Wishlist",
    });
  };
  useEffect(() => {
    console.log(wish);
  }, [wish]);

  return (
    <div className="shop">
      {contextHolder}
      {pictures.map((data, id) => (
        <div className="specsadd" key={id}>
          <img src={`/Images/${data}`} alt="specs" />
          <Button.Group>
            <Button
              className="qtybtn"
              onClick={() => decline(id)}
              icon={<MinusOutlined className="symbol" />}
            />
            <p>{productCounts[id]}</p>
            <Button
              className="qtybtn"
              onClick={() => increase(id)}
              icon={<PlusOutlined className="symbol" />}
            />
          </Button.Group>
          <h4>{prodnames[id]}</h4>
          <div className="shopbtns">
            <button onClick={() => addWish(data, id)}>♡ Wishlist</button>
            {/* <button className='adtc addtocart' onClick={addtoCart}>Add to Cart</button> */}
            <button
              style={{ backgroundColor: "black", color: "#fff" }}
              onClick={() => addtoCart(data, id, productCounts)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shopcontent;
