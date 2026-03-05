import React from 'react'

function HeaderItem({name,Icon}) {
  return (
    <div className='bg-black'>
      <Icon />
      <h2 className='text-black'>{name}</h2>
    </div>
  )
}

export default HeaderItem
