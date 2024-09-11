const hre = require("hardhat");

async function main() {
    // Deploy Policy Contract
    const Policy = await hre.ethers.getContractFactory("Policy");
    const policy = await Policy.deploy();
    await policy.deployed();
    console.log("Policy deployed to:", policy.address);

    // Deploy Claims Contract
    const Claims = await hre.ethers.getContractFactory("Claims");
    const claims = await Claims.deploy();
    await claims.deployed();
    console.log("Claims deployed to:", claims.address);

    // Deploy Insurance Pool Contract
    const InsurancePool = await hre.ethers.getContractFactory("InsurancePool");
    const insurancePool = await InsurancePool.deploy();
    await insurancePool.deployed();
    console.log("InsurancePool deployed to:", insurancePool.address);

    // Deploy Oracle Integration Contract
  /*   const OracleIntegration = await hre.ethers.getContractFactory("OracleIntegration");
    const oracleIntegration = await OracleIntegration.deploy("0xOracleAddress"); // Replace with your oracle address
    await oracleIntegration.deployed();
    console.log("OracleIntegration deployed to:", oracleIntegration.address);
 */
    // Deploy Governance Contract
    const Governance = await hre.ethers.getContractFactory("Governance");
    const governance = await Governance.deploy();
    await governance.deployed();
    console.log("Governance deployed to:", governance.address);

    // Deploy Identity Management Contract
    const IdentityManagement = await hre.ethers.getContractFactory("IdentityManagement");
    const identityManagement = await IdentityManagement.deploy();
    await identityManagement.deployed();
    console.log("IdentityManagement deployed to:", identityManagement.address);
}

// Call the main function and handle errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
