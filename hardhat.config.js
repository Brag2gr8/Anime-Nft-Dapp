require("@nomiclabs/hardhat-waffle");
// Import and configure dotenv
require("dotenv").config();

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      // This value will be replaced on runtime
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      url: process.env.PROD_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
