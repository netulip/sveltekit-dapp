import 'dotenv/config';
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-deploy'

export default {
	solidity: {
		version: '0.8.4'
	},
	networks: {},
	typechain: {
		outDir: 'types'
	}
}
