<script lang="ts">
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { Card } from 'flowbite-svelte';
    
    let projects = [];

    onMount(async () => {
        const response = await axios.get('http://api.github.com/users/yaronrueger/repos')
        projects = response.data.map((project: any) => ({
            name: project.full_name,
            description: project.description,
            url: project.html_url
        }))
        console.log(projects);
    });
</script>

<main>
    <div class="header">
        <h1 class=" text-portfolioDark2-100 dark:text-portfolioDark2-200">Projects</h1>
    </div>
    <div class="reposParent">
        {#each projects as project}
            <div class="reposChild">
                <li>
                    <Card href={project.url} size="lg">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {project.name}
                        </h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                            {project.description}
                        </p>
                    </Card>
                </li>
            </div>
        {/each}
    </div>
</main>

<style>
    @font-face {
        font-family: 'LouisGeorgeCafeLight';
        font-style: normal;
        src: url(/fonts/LouisGeorgeCafe/LouisGeorgeCafeLight.ttf);
    }
    @font-face {
        font-family: 'LouisGeorgeCafe';
        font-style: normal;
        src: url(/fonts/LouisGeorgeCafe/LouisGeorgeCafe.ttf);
    }
    main{
        width: 80%;
        font-family:LouisGeorgeCafeLight;
    }
    h1{
        font-size: 4em;
    }
    .reposParent{
        padding-top: 4vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }
    li{
        list-style: none;
        padding: 0;
    }

    @media screen and (max-width: 1200px) {
        .header{
            text-align: center;
            font-size: 0.7em;
        }
    }
</style>