import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar' >
      <div className='leftnav'>
        <h2>L  I  G  H  T</h2>
      </div>
      <div className='rightnav'>
        <ul>
            <li><a href='#home'>HOME</a></li>
            <li><a href='#shop'>SHOP</a></li>
            <li><a href='#aboutus'>ABOUT</a></li>
            <li><a href='#contact'>CONTACT</a></li>
            <img src='/Images/love.png'></img>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
