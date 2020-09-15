import React from 'react'

export default function NavBar(props) {
  const { setMainDisplayStep } = props;
  return (
    <div className='navBar'>
      <div className='logo'>
        logo
      </div>
      <ul>
        <li onClick={()=>setMainDisplayStep(1)} className='active'>ERC20</li>
        <li onClick={()=>setMainDisplayStep(2)} className='active'>ERC721</li>
        <li onClick={()=>setMainDisplayStep(3)} className='active'>Dapps</li>
      </ul>
    </div>
  )
}
