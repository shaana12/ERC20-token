const { ethers } = require("hardhat");

async function main() {
    const initialSupply = ethers.parseEther("1000000"); // 1M tokens

    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy(initialSupply);

    await token.waitForDeployment();

    console.log(`Token déployé à : ${await token.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
