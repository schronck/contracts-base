const MyContract = artifacts.require("MyContract");

module.exports = async (deployer) => {
  await deployer.deploy(MyContract);
};
