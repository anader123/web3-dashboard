import React from 'react'

export default function Main() {
  return (
    <div className='main'>
      <div className='upperNav'>
        Web3 Dashboard
      </div>
      <div className='mainContent'>
        <h1>ERC20 Tokens</h1>
        <div className='cardsWrap'>
          <div className='card'>
            <div className='cardImg'>
              <img src="https://images.unsplash.com/photo-1600089091502-4c849c4406d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt='pic 1' />
            </div>
            <div className='cardContent'>
              <h2>
                Dai
              </h2>
              <h5>
                Balance: 0 DAI
              </h5>
            </div>
            <span className='transferBtn '>
              <button>Transfer</button>
            </span>
          </div> 
        </div>
      </div>
    </div>
  )
}
