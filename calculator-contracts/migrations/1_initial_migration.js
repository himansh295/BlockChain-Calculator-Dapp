var Migrations = artifacts.require("./Calculator.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
