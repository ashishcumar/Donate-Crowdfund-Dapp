const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.parseUnits(n.toString(), "ether");
};

describe("CrowdFund", () => {
  let owner;
  let crowdFund;
  let otheruser;

  beforeEach(async () => {
    [owner, otheruser] = await ethers.getSigners();
    const CrowdFund = await ethers.getContractFactory("CrowdFund");
    crowdFund = await CrowdFund.deploy();
  });

  describe("contract deployment", () => {
    it("set the contract owner", async () => {
      const contractOwner = await crowdFund.owner();
      expect(contractOwner).to.equal(owner.address);
    });
  });

  describe("donate", () => {
    let donateTrans;
    beforeEach(async () => {
     donateTrans = await crowdFund.connect(owner).donate(tokens(1), { value: tokens(1) });
    });

    it("increases the total amount donated", async () => {
      const totalDonated = await ethers.provider.getBalance(crowdFund.target);
      expect(totalDonated).to.equal(tokens(1));
    });

    it("emit event NewDonation", async () => {
      expect(donateTrans).to.emit(crowdFund, "NewDonation");
    });

    it("increases the total donorsList count", async () => {
      const [donorsList] = await crowdFund.getAllDonationDetails();
      const donorsNum = donorsList.length;
      expect(donorsNum).to.equal(1);
    });

    // it("checks authorizeWithdraw", async () => {
    //   await crowdFund.authorizeWithdraw(otheruser.address);
    //   await crowdFund.connect(otheruser.address).withdraw();
    //   const balance = await ethers.provider.getBalance(crowdFund.target);
    //   expect(balance).to.equal(0);
    // });

    // it("checks revokeWithdraw", async () => {
    //   await crowdFund.revokeWithdraw(otheruser.address);
    //   const t = await crowdFund.connect(otheruser.address).withdraw();
    //   console.log({ t });
    // });
  });
});
