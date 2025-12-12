<script lang="ts">
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';
    
    interface Repository {
        id: number;
        name: string;
        description: string;
        html_url: string;
        language: string;
        stargazers_count: number;
        forks_count: number;
        updated_at: string;
        topics: string[];
    }
    
    let repositories: Repository[] = [];
    let loading = true;
    let error = '';

    onMount(async () => {
        try {
            const response = await fetch('https://api.github.com/users/yaronrueger/repos?sort=updated&per_page=20');
            if (response.ok) {
                const data = await response.json();
                repositories = data.filter((repo: Repository) => !repo.name.includes('fork') && !repo.name.includes('template'));
                repositories = repositories.slice(0, 8);
            } else {
                error = 'Failed to load repositories';
            }
        } catch (e) {
            error = 'Network error';
            console.error('Error fetching repositories:', e);
        } finally {
            loading = false;
        }
    });

    function handleCardClick(url: string) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
</script>

<main>
    <div class="header">
        <h1 class="text-portfolioDark2-100 dark:text-portfolioDark2-200">Projects</h1>
    </div>

    {#if loading}
        <div class="loading">
            <div class="text-center">
                <Icon icon="eos-icons:loading" width="3em" height="3em" class="animate-spin text-portfolioDark2-100 dark:text-portfolioDark2-200"/>
                <p class="text-portfolioDark2-100 dark:text-portfolioDark2-200 mt-4">Loading projects...</p>
            </div>
        </div>
    {:else if error}
        <div class="error">
            <div class="text-center">
                <Icon icon="material-symbols:error" width="3em" height="3em" class="text-red-500"/>
                <p class="text-red-500 mt-4">{error}</p>
            </div>
        </div>
    {:else}
        <div class="reposParent">
            {#each repositories as repo}
                <div class="reposChild text-center">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div 
                        class="project-card cursor-pointer"
                        on:click={() => handleCardClick(repo.html_url)}
                    >
                        <h3 class="mb-2 text-2xl font-bold tracking-tight text-portfolioDark2-100 dark:text-portfolioDark2-200">
                            {repo.name}
                        </h3>
                        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                            {repo.description || 'No description available'}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
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
    
    main {
        width: 80%;
        font-family: LouisGeorgeCafeLight;
    }
    
    .header {
        text-align: left;
        padding-bottom: 4vh;
    }
    
    h1 {
        font-size: 4em;
    }
    
    .loading, .error {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 30vh;
    }
    
    .reposParent {
        padding-top: 4vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }

    .reposChild {
        display: flex;
        flex-direction: column;
        margin: 0 30vh;
    }
    
    .project-card {
        background: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 2rem;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }

    :global(.dark) .project-card {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: none;
    }
    
    .project-card:hover {
        transform: translateY(-2px);
        background: rgba(255, 255, 255, 0.95);
        border-color: rgba(0, 0, 0, 0.2);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }

    :global(.dark) .project-card:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.3);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    .project-card h3 {
        margin-bottom: 1rem;
        font-family: 'LouisGeorgeCafe';
    }
    
    .project-card p {
        font-size: 1rem;
        line-height: 1.5;
        text-align: center;
    }
    
    @media screen and (max-width: 1200px) {
        .header {
            text-align: left;
            font-size: 0.7em;
        }
        
        .reposChild {
            margin: 0 0;
        }
        
        h1 {
            font-size: 3em;
        }
    }
    
    @media screen and (max-width: 768px) {
        h1 {
            font-size: 2.5em;
        }
        
        .project-card {
            padding: 1.5rem;
        }
    }
</style>