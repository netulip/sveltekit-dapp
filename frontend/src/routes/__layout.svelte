<script>
	import '@/styles'
</script>

<main>
	<slot />
</main>

<style lang="postcss">
	:global(:root, body) {
		@apply h-full overflow-hidden;
	}
	main {
		@apply flex flex-col h-full items-center justify-center;
	}
</style>
