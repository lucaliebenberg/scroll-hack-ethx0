// chainID has been updated to Scroll Sepolia ID
export const CHAIN_ID = 534351	
// TODO: not sure what safe-global-domain is && why its used
export const SAFE_GLOBAL_DOMAIN = "https://safe.global"

// TODO: need to deploy a minted address on seploia?
export const SEPOLIA_MINT_ADDRESS = "0xa3fea399160ad54b2aaac277cf65eb3a673e84f5"

// TODO: here to resolve error in mint.ts
export const SEPOLIA_TESTNET_MINT_ADDRESS = ""

// think we can leave bsc testnet, just do sepolia
// export const BSC_TESTNET_MINT_ADDRESS = "0x376a73fb318c8c282e0281d41c75ad3375cc2654"

// TODO: need to figure out what MPC pb is and change to use our own
export const MPC_PUBLIC_KEY =
"secp256k1:4HFcTSodRLVCGNVcGc4Mf2fwBBBxv9jxkGdiW2S2CA1y6UpVVRWKj6RX7d7TDt65k2Bj3w9FU4BGtt43ZvuhCnNt";

export const chainsConfig = {
ethereum: {
  // This is not mine :p
  providerUrl:
    "https://sepolia.infura.io/v3/6df51ccaa17f4e078325b5050da5a2dd",
  scanUrl: "https://sepolia.etherscan.io",
  name: "ETH",
},
bsc: {
  providerUrl: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
  scanUrl: "https://testnet.bscscan.com",
  name: "BNB",
},
btc: {
  name: "BTC",
  networkType: "testnet" as const,
  // API ref: https://github.com/Blockstream/esplora/blob/master/API.md
  rpcEndpoint: "https://blockstream.info/testnet/api/",
  scanUrl: "https://blockstream.info/testnet",
},
};
