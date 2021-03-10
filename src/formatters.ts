/**
 * Create DID uri given network
 * @param address did identifier
 * @param chainId did network
 */
 export const createDidFormat = (address: string, chainId: number) => {
  switch (chainId) {
    case 1: return `did:ethr:${address}`
    case 3: return `did:ethr:ropsten:${address}`
    case 4: return `did:ethr:rinkeby:${address}`
    case 5: return `did:ethr:goerli:${address}`
    case 30: return `did:ethr:rsk:${address}`
    case 31: return `did:ethr:rsk:testnet:${address}`
    case 42: return `did:ethr:kovan:${address}`
    case 5777: return `did:ethr:development:${address}`
    default: return address
  }
}
