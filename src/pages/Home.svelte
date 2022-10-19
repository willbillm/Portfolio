<script>
    import Navbar from "../components/Navbar.svelte";
	import About from "../components/About.svelte";
	import Projects from "../components/Projects.svelte";
	import Contact from "../components/Contact.svelte";



</script>

<div class="home">
    <Navbar example="whatever"/>
	<div class="intro">
		<h3>My name is</h3>
		<h1 class="name">William McGinnis</h1>
		<h1 class="sub-header">I build web applications</h1>
	</div>
	<About/>
	<Projects/>
	<Contact/>
</div>

<style>
    .intro {
		display: flex;
		flex-direction: column;
		text-align: center;
		position: relative;
		top: 120px;
	}

	.intro h1 {
		font-size: 70px;
		font-weight: 100;
		margin: 0;
	}

	.intro h3 {
		color: var(--green);
		font-size: 30px;
	}

	.name {
		color: var(--lightest-slate);
		margin-bottom: 20px;
	}

	.sub-header {
		color: var(--slate);
		font-size: 50px !important;
	}
</style>