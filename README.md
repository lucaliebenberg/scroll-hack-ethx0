# ScrollSafe 🔒

A decentralized solution for two-factor authentication (2FA), aiming to replace traditional solutions like Google’s Authenticator. By leveraging Oasis, Bandada, and Near, we provide a privacy-based solution that enhances the security of both web2 and web3 applications.

## 🚀 Getting Started

### Running the App Locally

To run the app on your local machine, navigate to the app directory, install the dependencies, and start the development server:

```sh
cd app
yarn
yarn dev
```

### Deploying the Contracts

To deploy the contracts, install the dependencies and use the Hardhat deploy command:

```sh
yarn
hh deploy --network <NETWORK> --contract <CONTRACT> --save --verify
```

Replace <NETWORK> and <CONTRACT> with the desired network and contract name, respectively.
