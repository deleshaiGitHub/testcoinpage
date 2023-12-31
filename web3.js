// Specify your Ethereum provider URL (e.g., Infura)
const providerUrl = 'https://rpc.v4.testnet.pulsechain.com';

// Create a Web3 instance
const web3 = new Web3(providerUrl);

// Check if Web3 is connected to a node
web3.eth.net.isListening()
    .then(() => console.log('Web3 is connected to a node'))
    .catch(error => console.error('Web3 connection error:', error));

// Request user permission to connect their Ethereum wallet (optional)
if (typeof window.ethereum !== 'undefined') {
    window.ethereum.enable()
        .then(accounts => {
            // User has approved access to their wallet
            const userAddress = accounts[0];
            console.log('Connected wallet address:', userAddress);
        })
        .catch(error => console.error('Wallet connection error:', error));
}

// Export the Web3 instance for use in other parts of your DApp (optional)
window.web3 = web3;
