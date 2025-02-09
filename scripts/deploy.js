const { ethers } = require("hardhat");

async function main() {
    const initialSupply = ethers.parseEther("1000000"); // 1M tokens

    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy(initialSupply);

    await token.waitForDeployment();

    console.log(`Token déployé à : ${await token.getAddress()}`);
    // 0xBd40C66e721a62DdEc55F1b04201D1ADCbf17095
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
