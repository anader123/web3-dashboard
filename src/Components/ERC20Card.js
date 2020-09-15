import React from 'react';

export default function ERC20Card(props) {
  const { name, symbol, image } = props;
  return (
    <div className='card'>
      <div className='cardImg'>
        <img src={image} alt='pic 1' />
      </div>
      <div className='cardContent'>
        <h3>
          {name}
        </h3>
        <h5>
          {`Balance: 0 ${symbol}`}
        </h5>
      </div>
      <span className='transferBtn'>
        <button>Transfer</button>
      </span>
    </div> 
  )
}
