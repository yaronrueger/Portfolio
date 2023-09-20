<script lang="ts">
    import Typewriter from 'svelte-typewriter';
    import { onMount } from 'svelte';
    import { fade, blur, fly, slide, scale } from 'svelte/transition';
    import Icon from '@iconify/svelte';
    import Tooltip from "sv-tooltip";

    let visible = false;

    onMount(() => {
        visible = true;
    });
</script>

<main class="starterPage dark:text-white">
    <div class="header">
        <Typewriter cursor={false} delay={500}>
            <h1>Hi, my name is <span class=" text-portfolioDark2-100 dark:text-portfolioDark2-200">Yaron Rüger</span></h1>
        </Typewriter>
        <Typewriter cursor={false} delay={1465}>
            <h2>
                dual student of computer science
            </h2>
        </Typewriter>
    </div>
    {#if visible}
        <div class="icons" in:fade="{{delay: 2500, duration: 2000}}">
            <Tooltip tip="GitHub" style="font-size:1.5vh" bottom>
            <div class="github">
                <a href="https://github.com/yaronrueger">
                <Icon icon="ri:github-fill" class="text-portfolioDark2-100 dark:text-portfolioDark2-200"  width="5vh" height="5vh"/>
                </a>
            </div>
            </Tooltip>
            <Tooltip tip="Mail" style="font-size:1.5vh" bottom>
            <div class="mail">
                <a href="https://github.com">
                <Icon icon="ion:mail-outline" class="text-portfolioDark2-100 dark:text-portfolioDark2-200"  width="5vh" height="5vh"/>
                </a>
            </div>
            </Tooltip>
        </div>
    {/if}
</main>

<style>
    @font-face {
        font-family: 'RandyGG';
        font-style: normal;
        src: url(/fonts/RandyGG/randy-gg.ttf);
    }
    @font-face {
        font-family: 'LouisGeorgeCafe';
        font-style: normal;
        src: url(/fonts/LouisGeorgeCafe/LouisGeorgeCafeLight.ttf);
    }
    main{
        font-family:LouisGeorgeCafe;
        min-height: 95vh;
        display: flex;
        flex-direction: column;
    }
    .starterPage h1{
        font-size: 4em;
    }
    .starterPage h2{
        font-size: 2em;
    }
    .header{
        text-align: center;
        padding-top: 30vh;
    }
    .icons{
        padding-top: 25px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 25px;
    }
    .github:hover, .mail:hover{
        transform: scale(1.3);
        transition: 0.4s;
    }
</style>