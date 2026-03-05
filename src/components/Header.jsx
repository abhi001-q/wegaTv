import React from 'react'
import logo from '../assets/logo_1.png'

function Header() {
  return (
    <div>
      <img className=' w-20  object-cover' src={logo} alt="Logo" />
    </div>
  )
}

export default Header
