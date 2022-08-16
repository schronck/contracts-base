# Smart contract development base - Truffle

The setup in this repository can be used as a quick starting point for smart contract development.

A version using [Hardhat](https://hardhat.org) is available [here](https://github.com/TomiOhl/contracts-base-hardhat).

## Requirements

To run the project you need:

- [Node.js](https://nodejs.org) development environment.
- a file named `.env`

Your `.env` file should contain the following variables:

```bash
# The private key of your wallet.
PRIVATE_KEY=

# Your infura.io project ID for deploying to Ethereum networks.
INFURA_ID=

# Your API key for verification.
ETHERSCAN_API_KEY=
```

## Setup

Pull the repository from GitHub, then install its dependencies by executing this command:

```bash
npm install
```

### Some additional steps before deployment

If you have anything to add about the usage of the contracts or the migration files need variable parameters, mention them here.

## Contract deployment

To deploy the smart contracts to a network, replace _[networkName]_ in this command:

```bash
truffle migrate --network [networkName]
```

Networks can be configured in _truffle-config.js_. We've preconfigured the following:

- `development` (for local testing)
- `ethereum` (Ethereum Mainnet)
- `goerli` (Görli Ethereum Testnet)
- `kovan` (Kovan Ethereum Testnet)
- `rinkeby` (Rinkeby Ethereum Testnet)
- `ropsten` (Ropsten Ethereum Testnet)
- `bsc` (BNB Smart Chain)
- `bsctest` (BNB Smart Chain Testnet)
- `polygon` (Polygon Mainnet (formerly Matic))
- `mumbai` (Matic Mumbai Testnet)
- `gnosis` (Gnosis Chain (formerly xDai Chain))

### Note

The above procedure deploys all the contracts. If you want to deploy only specific contracts, you can run only the relevant script(s) via the below command:

```bash
truffle migrate -f [start] --to [end] --network [name]
```

Replace _[start]_ with the number of the first and _[end]_ with the number of the last migration script you wish to run. To run only one script, _[start]_ and _[end]_ should match. The numbers of the scripts are:

- 1 - Migrations
- 2 - MyContract

## Verification

For source code verification on block explorers, you can use [truffle plugin verify](https://github.com/rkalis/truffle-plugin-verify).

```bash
truffle run verify [contractName] --network [networkName]
```

## Linting

The project uses [solhint](https://github.com/protofire/solhint). To run it, simply execute:

```bash
npm run lint
```

## Tests

To run the unit tests written for this project, execute this command in a terminal:

```bash
npm test
```

To run the unit tests only in a specific file, just append the path to the command. For example, to run tests just for MyContract:

```bash
npm test ./test/MyContractTest.js
```
