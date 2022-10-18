<script>
    import { onDestroy } from 'svelte';

    import Project from './Project.svelte';
    import Section from './Section.svelte';

    import { ProjectStore } from '../stores/ProjectStore.js';

    let projects = [];

    const unsubscribeProjects = ProjectStore.subscribe(data => {
        projects = data;
    });

    onDestroy(() => {
        unsubscribeProjects();
    });
</script>

<Section title="projects" id="projects">
    <ul class="project-list">
        {#each projects as project}
            <li>
                <Project {project}/>
            </li>
        {/each}
    </ul>

</Section>

