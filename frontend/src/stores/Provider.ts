import type { Readable } from 'svelte/store'

import { browser } from '$app/env'
import { providers } from 'ethers'
import { derived, readable } from 'svelte/store'
import { floatFromUnits } from '@/helpers/math'

export const account = readable<string>(undefined, (set) => {
	if (!browser || !window.ethereum) return
	set(window.ethereum.selectedAddress || undefined)

	const onAccountsChanged = (accounts: string[]) => set(accounts[0])
	window.ethereum.on('accountsChanged', onAccountsChanged)
	return () => window.ethereum.off('accountsChanged', onAccountsChanged)
})

export const chainID = readable<string>(undefined, (set) => {
	if (!browser || !window.ethereum) return
	set(window.ethereum.chainId || undefined)

	const onChainChanged = (id: string) => set(id || undefined)
	window.ethereum.on('chainChanged', onChainChanged)
	return () => window.ethereum.off('chainChanged', onChainChanged)
})

export const provider = derived([account, chainID], ([$account]) => {
	return browser && $account ? new providers.Web3Provider(window.ethereum) : undefined
})

export const signer = derived(provider, ($provider) => {
	return $provider ? $provider.getSigner() : undefined
})

export async function connect() {
	await window.ethereum.request({ method: 'eth_requestAccounts' })
}

export async function switchNetwork(network) {
	await window.ethereum.request({
		method: 'wallet_switchEthereumChain',
		params: [network]
	})
}
export const balance: Readable<number> = derived(
	[provider, account],
	([$provider, $account], set) => {
		if (!$provider || !$account) return
		$provider.getBalance($account).then((b) => set(floatFromUnits(b, 18)))
	},
	0
)
export async function addNetwork(network) {
	await window.ethereum.request({
		method: 'wallet_switchEthereumChain',
		params: [network]
	})
}
