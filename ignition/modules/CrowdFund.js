const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("CrowdFund", (m) => {
  const crowdfund = m.contract("CrowdFund", []);
  return { crowdfund };
});


