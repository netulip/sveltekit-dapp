import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'

export default {
	solidity: {
		version: '0.8.4'
	},
	networks: {},
	typechain: {
		outDir: 'types',
	},
}
