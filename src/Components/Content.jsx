import React, { useState } from 'react'

const Content = () => {
  const [count, setCount] = useState(1)
  const [clicked, setClicked] = useState(false)
  const handleprev = (e)=>{
    e.preventDefault();
    if(count!==1){
      setCount(count-1);
      setClicked(true)
      setTimeout(()=>setClicked(false),900)
    }

   
   
  }
  const handlefwd = (e)=>{
    e.preventDefault();
    if(count!==5){
      setCount(count+1);
      setClicked(true)
      setTimeout(()=>setClicked(false),900)
    }
    
  }
  return (
    <div className='content'>
      <img className="arrow prev" onClick={handleprev} alt="" src='/Images/down-arrow.png'></img>
      <div className='carousel'>
      <img className={`specsimg ${clicked ? 'fade-in' : null}`} src={`/Images/Specs${count}.png`} alt="" ></img>
      </div>
      <img className="arrow fwd" onClick={handlefwd} alt="" src='/Images/down-arrow.png'></img>
    </div>
  )
}

export default Content
