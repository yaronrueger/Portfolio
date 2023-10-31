<script>
        import { fade, blur, fly, slide, scale } from 'svelte/transition';
        import Icon from '@iconify/svelte';
        import Tooltip from "sv-tooltip";
        import { Hr } from 'flowbite-svelte';
</script>

<main>
    <Hr classHr="w-full mx-auto my-8 rounded md:my-10" />
    <div class="icons" in:fade="{{delay: 2500, duration: 2000}}">
        <div class="github">
            <a href="https://github.com/yaronrueger">
            <Icon icon="ri:github-fill" class="text-portfolioDark2-100 dark:text-portfolioDark2-200"  width="5vh" height="5vh"/>
            </a>
        </div>
        <div class="mail">
            <a href="mailto:yaron.rueger@outlook.de">
            <Icon icon="ion:mail-outline" class="text-portfolioDark2-100 dark:text-portfolioDark2-200"  width="5vh" height="5vh"/>
            </a>
        </div>
    </div>
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
        padding-top: 35px;
        margin-bottom: 35px;
        font-family:LouisGeorgeCafe;
        display: flex;
        flex-direction: column;
        width: 80%;
    }
    .icons{
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