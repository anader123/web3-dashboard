import React, { useState } from 'react';
import { addressShortener } from '../eth/ethHelpers';

export default function UpperNav() {
  const [ walletConnected, setWalletConnected ] = useState(false);
  const [ userAddress, setUserAddress ] = useState('address here');

  const connectWallet = async () => {
    if(window.ethereum) {
      const accounts = await window.ethereum.enable();
      const shortAddress = addressShortener(accounts[0]);
      setUserAddress(shortAddress);
      setWalletConnected(true);
    }
    else {
      window.alert('No Ethereum wallet detected')
    }
  }

  return (
    <div className='upperNav'>
      <h2>Web3 Dashboard</h2>
      <div className='walletButtonContainer'>
        {!walletConnected ?
        <button onClick={connectWallet}>Wallet Connect</button>
        :
        <h3>{userAddress}</h3>
        }
      </div>
    </div>
  )
}
