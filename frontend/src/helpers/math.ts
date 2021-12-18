import type { BigNumberish } from 'ethers'

import { ethers } from 'ethers'

export function floatFromUnits(n: BigNumberish, units: BigNumberish) {
	return parseFloat(ethers.utils.formatUnits(n, units))
}

export function intFromUnits(n: BigNumberish, units: BigNumberish) {
	return parseInt(ethers.utils.formatUnits(n, units))
}
