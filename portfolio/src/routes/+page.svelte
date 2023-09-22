<script lang="ts">
    import Starter from '../components/starter.svelte'
    import AboutMe from '../components/aboutMe.svelte'
    import Skills from '../components/skills.svelte'
    import Projects from '../components/projects.svelte'
    import Career from '../components/career.svelte'
    import Footer from '../components/footer.svelte'
    import { DarkMode } from 'flowbite-svelte';
    import Icon from '@iconify/svelte';
    import { fade, blur, fly, slide, scale } from 'svelte/transition';
    import { onMount } from 'svelte';

    let visible = false;
    onMount(() => {
        visible = true;
    });

</script>

<div class="darkMode">
    <DarkMode />
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