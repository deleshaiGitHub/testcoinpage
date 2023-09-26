// JavaScript code in claiming_dapp.js
// Initialize Web3.js and set up Ethereum provider (if not already done)

// Function to connect the user's Ethereum wallet and check for claimable tokens
async function connectWalletAndCheckClaimableTokens() {
    // Request user permission to connect their Ethereum wallet
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.enable();
            const userAddress = accounts[0];
            console.log('Connected wallet address:', userAddress);

            // After connecting the wallet, automatically check for claimable tokens
            await checkClaimableTokens(userAddress);
        } catch (error) {
            console.error('Wallet connection error:', error);
        }
    } else {
        console.error('Ethereum wallet provider not found.');
    }
}

// Function to check claimable tokens for a user
async function checkClaimableTokens(userAddress) {
    try {
        // Connect to the vesting contract or token distribution contract
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // Call a function to check claimable tokens for the user
        const claimableTokens = await contract.methods.getClaimableTokens(userAddress).call();

        // Display the claimable tokens on the page
        document.getElementById("claimStatus").textContent = `You can claim ${claimableTokens} tokens.`;
    } catch (error) {
        console.error('Error checking claimable tokens:', error);
    }
}

// Function to initiate the claiming process (if desired)
async function claimTokens() {
    // Implement the claiming logic here
}

// Call the connectWalletAndCheckClaimableTokens function when the page loads
window.addEventListener('load', () => {
    connectWalletAndCheckClaimableTokens();
});
