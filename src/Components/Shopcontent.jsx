import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Switch, Space } from 'antd';
import { useCount } from '../CountContext';
import { useProductCounts } from '../ProductCountsProvider';


const Shopcontent = () => {
  const pictures = ["Specs1.png", "Specs2.png", "Specs3.png", "Specs4.png", "Specs5.png", "Specs6.png"];
  const prodnames = ["Breezy Gaze", "Nimble Vision", "Lithe lenses", "Floating Frames", "Effortless Elegance", "Light Special"];
  // const [productCounts, setProductCounts] = useState(Array(pictures.length).fill(0));
  const { productCounts, setProductCounts } = useProductCounts();
  const { count, setCount } = useCount(0);

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
  const addtoCart=()=>{
    const newCounts = [...productCounts];
    setCount(() => {
      var sum = 0;
      for (var i = 0; i < newCounts.length; i++) {
        sum = sum + newCounts[i];
      }
      console.log(newCounts);
      return sum;
    });
    
  }

  return (
    <div className='shop'>
      {pictures.map((data, id) => (
        <div className='specsadd' key={id}>
          <img src={`/Images/${data}`} alt="specs" />
          <Button.Group>
            <Button onClick={() => decline(id)} icon={<MinusOutlined />} />
            <p>{productCounts[id]}</p>
            <Button onClick={() => increase(id)} icon={<PlusOutlined />} />
          </Button.Group>
          <h4>{prodnames[id]}</h4>
          <div className='shopbtns'>
            <button>♡ Wishlist</button>
            <button className='adtc addtocart' onClick={addtoCart}>Add to Cart</button>
          </div>
        </div>
      )
      )}
    </div>
  );
};

export default Shopcontent;
