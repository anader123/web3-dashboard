import React from 'react';
import ERC20Card from './ERC20Card';
import { ERC20Array } from '../TokenData/erc20Data';

export default function ERC20Display() {
  return (
    <div className='mainContent'>
      <h1>ERC20 Tokens</h1>
      <div className='cardsWrap'>
        {ERC20Array.map(ERC20 => {
          return (
            <ERC20Card 
              symbol={ERC20.symbol}
              name={ERC20.name}
              image={ERC20.image}
            />
          )
        })}
      </div>
    </div>
)
}
