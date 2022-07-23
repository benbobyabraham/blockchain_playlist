const ethers = require('ethers')

const rpcURL =  'https://cloudflare-eth.com/'
const provider = new ethers.providers.JsonRpcProvider(rpcURL)

// console.log('https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48')
// https://ethereum.org/en/developers/docs/standards/tokens/erc-20/
const CONTRACT_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"

const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider )

const main = async () => {

    const block = await provider.getBlockNumber()
    console.log(block)
}

main()