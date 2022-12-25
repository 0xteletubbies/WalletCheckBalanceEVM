const ethers = require('ethers');

// Replace the wallet address with your wallet address on the Polygon network
const walletAddress = '0x9eaD03F7136Fc6b4bDb0780B00a1c14aE5A8B6d0';

// Replace the providerURL with the providerURL of your Polygon network
const provider = new ethers.providers.JsonRpcProvider('https://polygon-bor.publicnode.com');

async function checkBalance() {
  // Get the balance of the wallet on the Polygon network
  const balance = await provider.getBalance(walletAddress);

  // Display the balance in Ether
  console.log(`Current balance: ${ethers.utils.formatEther(balance)} ETH`);
}

setInterval(checkBalance, 10000); // Run the function every 10 seconds
