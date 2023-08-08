import React from 'react'
import '../Counter.css';

const Header = () => {
  return (
    <div className='main-header'>
      <div className='logo'>BLACKGOLD</div>
      <ul>
        <li>Home</li>
        <li>Counter</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Header