import React from 'react';
import ERC20Display from './ERC20Display';
import ERC721Display from './ERC721Display';
import DappDisplay from './DappDisplay';

export default function Main(props) {
  const { mainDisplayStep } = props;

  switch (mainDisplayStep) {
    case 1:
      return(
        <ERC20Display />
      )
    case 2:
      return(
        <ERC721Display />
      )
    case 3:
      return(
        <DappDisplay />
      )
    default:
      break;
  }
}
