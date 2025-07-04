import React, { useState } from 'react';

function CryptoCheckout() {
  // 4 bits of state: are we connected, the fake address, the input amount, and a message
  const [connected, setConnected] = useState(false);
  const [address,   setAddress]   = useState('');
  const [amount,    setAmount]    = useState('');
  const [message,   setMessage]   = useState('');

  // Make up a short fake address and mark as connected
  function connectWallet() {
    const fake = '0x' + Math.random().toString(36).slice(2, 10);
    setConnected(true);
    setAddress(fake);
    setMessage('Connected: ' + fake);
  }
// Validate and “send” the payment
  function sendPayment() {
    if (!connected) {
      setMessage('Please connect your wallet first.');
      return;
    }
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setMessage('Please enter an amount.');
      return;
    }
    setMessage('Sending ' + amount + ' ETH...');
    setTimeout(() => {
      // After 1 second, show success
      setMessage('Sent ' + amount + ' ETH! 🎉');
    }, 1000);
  }
  ChatGPT said:

Thought for 4 seconds
Absolutely—here’s the version with no arrow functions anywhere, including the component itself and the input handler:

jsx
Copy code
import React, { useState } from 'react';

function CryptoCheckout() {
  // 4 pieces of state
  const [connected, setConnected] = useState(false);
  const [address,   setAddress]   = useState('');
  const [amount,    setAmount]    = useState('');
  const [message,   setMessage]   = useState('');

  // Simulate wallet connection
  function connectWallet() {
    var fake = '0x' + Math.random().toString(36).substring(2, 10);
    setConnected(true);
    setAddress(fake);
    setMessage('Connected: ' + fake);
  }

  // Handle the amount input change
  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  // Simulate sending a payment
  function sendPayment() {
    if (!connected) {
      setMessage('Please connect your wallet first.');
      return;
    }
    if (!amount) {
      setMessage('Please enter an amount.');
      return;
    }
    setMessage('Sending ' + amount + ' ETH...');
    setTimeout(function() {
      setMessage('Sent ' + amount + ' ETH! 🎉');
    }, 1000);
  }

  // UI
  return (
    <div style={{
      border: '1px solid #333',
      padding: '10px',
      margin: '20px auto',
      width: '300px',
      fontFamily: 'sans-serif'
    }}>
      <h3>Crypto Checkout</h3>

      { !connected && (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) }

      { connected && (
        <div>
          <p><strong>Wallet:</strong> {address}</p>
          <input
            placeholder="Amount in ETH"
            value={amount}
            onChange={handleAmountChange}
            style={{ width: '100%', marginBottom: '8px' }}
          />
          <button onClick={sendPayment}>Pay</button>
        </div>
      ) }

      <p style={{ marginTop: '10px', color: 'teal' }}>{message}</p>
    </div>
  );
}
