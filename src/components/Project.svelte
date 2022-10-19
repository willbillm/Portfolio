<script>
    import { each } from "svelte/internal";

    export let project;
</script>

<div class="project">
    <div class="project-overview">
        <div class="project-header">
            <h2>{project.title}</h2>
            <div class="links">
                {#if project.github.default}
                    <a href={project.github.default} title="github">
                        <img src="./images/icons/github-sign.png" alt=""/>
                    </a>
                {/if}
                {#if project.github.client}
                    <a href={project.github.client} title="Client">
                        <img src="./images/icons/github-sign.png" alt=""/>
                    </a>
                {/if}
                {#if project.github.server}
                    <a href={project.github.server} title="Server">
                        <img src="./images/icons/github-sign.png" alt=""/>
                    </a>
                {/if}
                {#if project.link}
                    <a href={project.link} title="To site">
                        <img src="./images/icons/site.png" alt=""/>
                    </a>
                {/if}
            </div>
        </div>
        <p class='description'>
            {project.description}
        </p>
        <div class="key-info">
            {#each Object.keys(project.keyInfo) as infoKey}
                <div class="list-container">
                    <h3>
                        {infoKey}
                    </h3>
                    <p>{project.keyInfo[infoKey]}</p>
                </div>
            {/each}
            <div class="features-list-container">
                <h3>Features:</h3>
                    <ul>
                        {#each project.features as feature}
                            <li><p>{feature}</p></li>
                        {/each}
                    </ul>
            </div>
    
            <div class="list-container">
                <h3>
                    Tech:
                </h3>
                <ul>
                    {#each project.tech as tech}
                        <li>
                            <p>
                                {tech}
                            </p>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>

    </div>
    <div class="project-img">
        <a href={`/#/image/${project.img[0]}`}><img src={project.img} alt='placeholder'/></a>
    </div>
</div>

<style>
    .project {
        width: auto;
        max-width: 1600px;
        min-height: 50vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .project-overview {
        width: 65%;
        height: 100%;
        position: relative;
        top: 50px;
        background-color: var(--light-navy);
        border-radius: 10px;
        margin: 40px auto;
        box-shadow: 3px 10px 30px -15px var(--navy-shadow);
        text-align: center;
        padding: 2em 0em;
    }

    .project-img {
        height: auto;
        margin: 0 auto;
        width: 100%;
    }

    .project-img::before {
        content: '';
        display: inline-block;
        background-color: #EA4C3C;
        width: 200px;
        height: 700px;
        position: absolute;
        bottom: -1.5%;
        border-radius: 10px;
        margin-left: 100px;
        
    }

    .project h2 {
        top: 0;
        position: relative;
        max-width: 280px;
        margin-top: 15px;
        color: var(--light-slate);
        font-weight: 100;
        font-size: 2em;
        padding-left: 10%;
    }

    .project h2::after {
        content: '';
        display: inline-block;
        position: relative;
        top: -60%;
        width: 115%;
        height: 2px;
        background-color: var(--green);
    }

    .project img {
        width: 80%;
        height: 80%;
        object-fit: scale-down;
        border-radius: 10px;
        position: relative;
        margin: 0 150px;
        padding-left: 0px;
        align-items: center;

    }

    .project ul {
        text-align: left;
    }

    .project p {
        color: var(--slate);
        font-size: 1.25em;
        display: flex;
        justify-content: flex-start;
        margin: 0 auto;
        max-width: 45ch;
        text-align: left;
    }

    .project-header {
        position: relative;
        display: flex;
        margin-bottom: 20px;
        max-height: 75px;
    }

    .key-info p {
        font-size: 1em;
        width: auto;
        max-width: 45ch;
        color: var(--slate);
        margin: 0;
    }

    .key-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        padding: 0 10%;
        margin: 0 auto;
       
    }

    .list-container {
        width: auto;
        min-width: 30ch;
        display: flex;
        flex-direction: column;
    }

    .list-container p {
        font-size: 16px;
    }

    .key-info ul {
        font-size: 16px;
        padding: 0;
        position: relative;
        color: var(--green);
    }

    .key-info h3 {
        text-align: left;
        font-size: 25px;
        font-weight: 100;
        color: var(--lightest-slate);
        
    }

    .description {
        font-size: 17px !important;
        margin-left: 0 !important;
        padding-left: 10%;
        max-width: 45ch !important;
        
    }

    .links {
       margin: 2.5% 0 0 4%; 
       
    }

    .links img {
        width: 30px;
        height: 40px;
        margin: 0 20px !important;
    }

    .links img:hover {
        transform: translateY(-10%);
        transition: all 0.1s ease-in-out;
    }

    .features-list-container {
        padding-right: 50px;
    }

    @media (max-width: 900px) {
        .project {
            display: flex;
            flex-direction: column;
            width: 90%;
        }

        .project-overview {
            margin: 0;
            display: block;
            width: 100%;
        }

        .key-info {
            display: block;
        }

        .project p {
            padding-left: 4%;
            font-size: 17px;
        }

        .project-img::before {
            display: none;

        }

        .project h2 {
            padding-left: 4%;
        }

        .description {
            padding: 0 40px !important;
        }

        .project-img {
            width: 100%;
            margin-top: 70px;
        }

        .project-img img {
            margin: 0 auto;
            width: 100%;
        }

        
        
    }

</style>