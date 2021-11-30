require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
// const privateKey = fs.readFileSync(".secret").toString()
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY
const projectId = "204efb1ccc384775857ef27ec34795e8"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    maunnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
