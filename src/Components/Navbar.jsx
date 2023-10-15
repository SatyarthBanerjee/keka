import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, Badge, Button, Switch, Space } from 'antd';
import { useCount } from '../CountContext';
import {ShoppingCartOutlined} from '@ant-design/icons'
const Navbar = () => {
  const [clicked, setClicked]= useState(false)
  const [liked, setLiked] = useState(false)
  const { count } = useCount(0);
  // const [count, setCount] = useState(0)
  const handleClicked = ()=>{
    setClicked(clicked => !clicked)
    console.log(clicked)
  }
  const navigate =useNavigate()
  // const handleClose=()=>{
  //   setClicked(false)
  //   console.log(clicked);
  // }
  const [active, setActive]= useState("")
  const [isClick, setClick] = useState(false);
  const handleLiked = ()=>{
    setLiked(!liked)
  }
  const handleNavigation=(section)=>{
    setActive(section)
    console.log(active);
    navigate(`/${section}`)
  }
  return (
    <>
      <div className='navbar' >
      <div className='leftnav'>
        <h2>L  I  G  H  T</h2>
      </div>
      <div className='rightnav'>
        <ul>
            <li className={active===""?"activelink":""} onClick={()=>handleNavigation("")}><a className={active===""?"activetext":""} href='#home'>HOME</a></li>
            <li className={active==="shop"?"activelink":""} onClick={()=>handleNavigation("shop")}><a className={active==="shop"?"activetext":""} href='#shop'>SHOP</a></li>
            <li onClick={()=>handleNavigation("")}><a href='#aboutus'>ABOUT</a></li>
            <li onClick={()=>handleNavigation("")}><a href='#contact'>CONTACT</a></li>
            <img src='/Images/love.png'></img>
            <Badge count={count} style={{ marginTop: "4px" }}>
              <Avatar style={{backgroundColor:"transparent"}} size="large" icon={<ShoppingCartOutlined style={{color:"black"}}/>} />
            </Badge>

            <div onClick={handleClicked} className='hamburg'>
              <div className='ham'></div>
              <div className='ham'></div>
              <div className={`ham2 ${clicked?'shorten':null}`}> </div>
            </div>
        </ul>
      </div>
     
    </div>
     <div className={`hamnav ${clicked?'fade-in-from-right':'fade-out-to-right'}`}>
          <ul>
            <li onClick={()=>navigate("")}><a href='#home'>HOME</a></li>
            <li onClick={()=>navigate("shop")}><a href='#shop'>SHOP</a></li>
            <li><a href='#aboutus'>ABOUT</a></li>
            <li><a href='#contact'>CONTACT</a></li>
          </ul>
           
      </div>
    </>
    
  )
}

export default Navbar
