<script lang="ts">
    import Starter from '../components/starter.svelte'
    import AboutMe from '../components/aboutMe.svelte'
    import Skills from '../components/skills.svelte'
    import Projects from '../components/projects.svelte'
    import Career from '../components/career.svelte'
    import Footer from '../components/footer.svelte'

    import Icon from '@iconify/svelte';
    import { fade, blur, fly, slide, scale } from 'svelte/transition';
    import { onMount } from 'svelte';

    let visible = false;
    onMount(() => {
        visible = true;
        
        // Dark mode toggle functionality
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

        // Change the icons inside the button based on previous settings
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themeToggleLightIcon?.classList.remove('hidden');
        } else {
            themeToggleDarkIcon?.classList.remove('hidden');
        }

        themeToggleBtn?.addEventListener('click', function() {
            // toggle icons inside button
            themeToggleDarkIcon?.classList.toggle('hidden');
            themeToggleLightIcon?.classList.toggle('hidden');

            // if set via local storage previously
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }
        });
    });

</script>

<!-- Dark mode button replaced by native implementation -->
<div class="darkMode">
    <button id="theme-toggle" type="button" aria-label="Toggle dark mode" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
        <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
        <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    </button>
</div>
{#if visible}
    <div class="iconUp" id="backToTop">
        <a href="#starter">
            <Icon icon="mingcute:arrow-up-fill" style="font-size: 3vh;" class=" text-portfolioDark2-100 dark:text-portfolioDark2-200"/>
        </a>
    </div>
{/if}

<main>
    <div id="starter">
        <Starter></Starter>
    </div>
    {#if visible}
        <div class="iconDown" in:scale="{{delay: 2860, duration: 500}}">
            <div class="iconDownChild">
                    <Icon icon="bx:down-arrow" style="font-size: 3vh;" class=" text-portfolioDark2-100 dark:text-portfolioDark2-200"/>
            </div>
        </div>
    {/if}
    <div id="aboutMe">
        <AboutMe></AboutMe>
    </div>
    <div id="career">
        <Career></Career>
    </div>
    <div id="projects">
        <Projects></Projects>
    </div>
    <div id="skills">
        <Skills></Skills>
    </div>
    <div id="footer">
        <Footer></Footer>
    </div>
</main>

<style>
    :root{
        scroll-behavior: smooth;
    }
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-20px);
        }
        60% {
            transform: translateY(-15px);
        }
    }
    @keyframes slide-in {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(20px);
        }
    }
    .darkMode{
        position: fixed;
        right: 15px;
        top: 15px;
    }
    .iconUp{
        position: fixed;
        right: 15px;
        bottom: 15px;
        visibility: hidden;
    }
    .iconDown{
        display: flex;
        justify-content: center;
        width: 100%;
        min-height: 5vh;
        max-height: 5vh;
        animation: bounce 2s infinite;
    }
    #starter, #aboutMe, #skills, #projects, #career, #footer{
        display: flex;
        justify-content: center;
    }
    @media screen and (max-width: 1200px) {
        .iconDownChild{
        display: none;
    }
    }
</style>