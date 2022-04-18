const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');




const whitelistAddresses = new Array(777)

for (let i = 0; i < whitelistAddresses.length; i++) {
    whitelistAddresses[i] = i
    if (i == 0) whitelistAddresses[i] = "0x984d6e15f6Ca2C2165dd0209890eC1825ac2A5a2"
    if (i == 555) whitelistAddresses[i] = "0xD8f94d447c5f7dfB5a6278be1e927bd00cf1c851"
}

const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })

const claimAddr = keccak256("0x984d6e15f6Ca2C2165dd0209890eC1825ac2A5a2")
const hexProof = merkleTree.getHexProof(claimAddr)

const claimAddr2 = keccak256("0xD8f94d447c5f7dfB5a6278be1e927bd00cf1c851")
const hexProof2 = merkleTree.getHexProof(claimAddr2)

const hexRoot = merkleTree.getHexRoot(leafNodes)

console.log("root:" + hexRoot)
console.log(hexProof)
console.log(hexProof2)
