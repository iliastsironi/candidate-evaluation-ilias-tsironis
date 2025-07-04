import React, { useState } from 'react';

const CryptoCheckout = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const fakeConnectWallet = () => {
    const fakeAddress = '0x' + Math.random().toString(36).substr(2, 40);
    setAddress(fakeAddress);
    setWalletConnected(true);
    setStatus('Wallet connected: ' + fakeAddress);
  };

  const handlePayment = () => {
    if (!walletConnected) {
      setStatus('Connect your wallet first.');
      return;
    }
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setStatus('Enter a valid amount.');
      return;
    }
    setStatus('Processing payment');
    setTimeout(() => {
      const txId = '0x' + Math.random().toString(36).substr(2, 64);
      setStatus(\`Payment of \${amount} ETH sent! Transaction ID: \${txId}\`);
    }, 1500);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Crypto Checkout</h2>
      {!walletConnected && <button onClick={fakeConnectWallet}>Connect Wallet</button>}
      {walletConnected && (
        <div>
          <p><strong>Connected:</strong> {address}</p>
          <input
            type="text"
            placeholder="Amount in ETH"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            style={{ marginRight: '8px' }}
          />
          <button onClick={handlePayment}>Pay</button>
        </div>
      )}
      {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
    </div>
  );
};

export default CryptoCheckout;
