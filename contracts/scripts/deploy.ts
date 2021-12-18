import { ethers } from 'hardhat'

async function main() {
	const [deployer] = await ethers.getSigners()
	const balance = await deployer.getBalance()

	console.log('Deployer Address: ', deployer.address)
	console.log('Deployer Balance: ', balance.toString())

	const factory = await ethers.getContractFactory('HelloWorld')
	const contract = await factory.deploy({ value: ethers.utils.parseEther('0.001') })
	await contract.deployed()

	console.log('Contract Address: ', contract.address)
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
