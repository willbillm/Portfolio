<script>
    import Section from "./Section.svelte";
    import Skills from "./Skills.svelte";
</script>

<Section title="about" id="about">
    <div class="about">
        <p>
            I am a graduate from the University of Washington in Business Administration. I have taken up web development through self-studying, the support and teaching of fellow web developers in my life as well as online tutorials. I am eager to learn more about the web development and software engineering world as a whole.
        </p>
        <Skills />
    </div>
</Section>

<style>
    .about {
        color: var(--lightest-slate);
        display : flex;
        flex-direction: column;
        width: 100%;
        position: relative;
    }

    .about p {
        color: var(--slate);
        font-size: 25px;
        margin: 0 auto;
        max-width: 800px;
        text-align: left;
    }

    @media (max-width: 900px) {
        .about p {
            max-width: 80%;
            font-size: 20px;
        }
    }
    
</style>