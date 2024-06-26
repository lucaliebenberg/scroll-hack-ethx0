import { ethers } from "ethers"
import { SEPOLIA_TESTNET_MINT_ADDRESS, SEPOLIA_MINT_ADDRESS } from "@/constants"

export const getMintData = (selectedChain: string, address: string) => {
  const iface = new ethers.Interface(["function mint(address _to)"])
  const data = iface.encodeFunctionData("mint", [address])

  return {
    to: selectedChain === "eth" ? SEPOLIA_MINT_ADDRESS : SEPOLIA_TESTNET_MINT_ADDRESS,
    value: "0",
    data: data,
  }
}
