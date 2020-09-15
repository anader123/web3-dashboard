import React from 'react';
import ERC20Display from './ERC20Display';
import ERC721Display from './ERC721Display';
import DappDisplay from './DappDisplay';

export default function Main(props) {
  const { mainDisplayStep } = props;

  switch (mainDisplayStep) {
    case 1:
      return(
        <div className='main'>
          <div className='upperNav'>
            Web3 Dashboard
          </div>
          <ERC20Display />
        </div>
      )
    case 2:
      return(
        <div className='main'>
        <div className='upperNav'>
          Web3 Dashboard
        </div>
          <ERC721Display />
        </div>
      )
    case 3:
      return(
        <div className='main'>
          <div className='upperNav'>
            Web3 Dashboard
          </div>
          <DappDisplay />
        </div>
      )
    default:
      break;
  }

  return (
    <div></div>
  )
}
