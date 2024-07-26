
require ('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: "0.8.10",

  defaultNetwork: "L3",
  networks:{
    hardhat:{},
    L3: {
      url: "https://rpc-live-amber-cougar-9xs8t1or8j.t.conduit.xyz",
      chainId: 51611,
      accounts: ['5753e65f56865a161fbf41932a0d855139a4ce9dc20d82fb655bff393fc41702'],
    },
  }
};
