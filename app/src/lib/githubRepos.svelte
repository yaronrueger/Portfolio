<script lang="ts">
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { Card } from 'flowbite-svelte';
    
    let projects:any[] = [];

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

<style>
    li{
        list-style: none;
        padding: 0;
    }
    .reposParent{
        padding-top: 4vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }
    
</style>