import React from 'react'

export const Navbar = ( {listData,menuList}) => {
  return (
    <>
    
    <nav className='navbar'>
    <div className='btn-group'>
        {menuList.map((curelem)=>{
            return(
      <button className='btn__item' onClick={()=>listData(curelem)}>
        {curelem}</button>
            )}
            )}
    </div>
  </nav>
    </>
    

  )
}

export default Navbar;