import { task } from 'hardhat/config'
import '@nomiclabs/hardhat-waffle'

task('accounts', 'Prints the list of accounts', async (_, hre) => {
	const accounts = await hre.ethers.getSigners()
	accounts.forEach((account) => console.log(account.address))
})

export default {
	solidity: '0.8.4',
	networks: {}
}
