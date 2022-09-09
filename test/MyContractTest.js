const ethers = require("ethers");
const { BN, expectRevert } = require("@openzeppelin/test-helpers");
const { expectRevertCustomError } = require("custom-error-test-helper");
const expect = require("chai").expect;

const MyContract = artifacts.require("MyContract");

contract("MyContract", async function (accounts) {
  let contract;

  beforeEach("deploy a new contract", async function () {
    contract = await MyContract.new();
  });

  context("some context", async function () {
    it("should greet correctly", async function () {
      const result = await contract.hello();
      expect(result).to.equal("Hello friend");
    });

    it("should not greet as well", async function () {
      await expectRevertCustomError(MyContract, contract.notHello(), "Nope", [
        accounts[0]
      ]);
    });
  });
});
