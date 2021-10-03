require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider")
const providerTestnet = new HDWalletProvider({
  privateKeys: ['b8a56e6041d2d97564fdbe342e32e8518ec1e41230d11ef3333f0bebd152a16a'],
  providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
});

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    matic: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://rpc-mumbai.maticvigil.com/v1/bd76d9f2e2c3993bbfef0082f25c30d017fc1feb`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 6000000,
      gasPrice: 10000000000,
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          process.env.INFURA_RINKEBY
        )
      },
      network_id: 4,
      gas: 6000000,
      gasPrice: 10000000000,
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          process.env.INFURA_ROPSTEN
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: "*"
    },
    goerli: {
      provider: function () {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          process.env.INFURA_GOERLI
        )
      },
      network_id: 5,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 200,
      gas: 5000000,
      gasPrice: 25000000000
    },
    bsc: {
      // production
    },
    binanceTestnet: {
          provider: () => providerTestnet,
          network_id: "97",
          gas: 1000000,
          skipDryRun: true,
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}