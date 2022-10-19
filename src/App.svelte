<script>
	import Router from "svelte-spa-router";
	import Home from "./pages/Home.svelte";
	import ImageFocus from "./pages/ImageFocus.svelte"
	
	const routes = {
        '/': Home,
		'/image/:img-url': ImageFocus
    }

</script>

<main>
	<Router routes={routes}/>
</main>

<style>
	main {
		min-height: 400vh;
		background-color: var(--navy);
		width: 100%;
		overflow-x: hidden;
	}
</style>