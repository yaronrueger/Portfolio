<script>
    import Typewriter from 'svelte-typewriter'
    import { fade, blur, fly, slide, scale } from 'svelte/transition';
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';
    import { bounceIn } from 'svelte/easing';

    let visible = false;
    onMount(()=>{ 
        visible = true; 
    })

    function animationIcons(){

    }
</script>

<section class="part1">
    <div class="header">
        <Typewriter cursor={false} delay={500}>
            <h1>Hi, my Name is <span class="name">Yaron Rüger</span></h1>
        </Typewriter>
        <Typewriter cursor={false} delay={1465}>
            <h2>dual Student of computer science</h2>
        </Typewriter>
        {#if visible}
            <div class="links" in:fade="{{delay: 2500, duration: 2000}}">
                <ul>
                    <li class="githubIcon">
                        <a href="https://github.com">
                            <img  src="../../githubIcon.svg" alt="">
                        </a>
                    </li>
                    <li class="mailIcon">
                        <a href="https://github.com">
                            <img  src="../../mailIcon.svg" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        {/if}
    </div>
    {#if visible}
        <div id="iconDown"class="iconDown" in:slide="{{delay: 2860, duration: 500}}">
            <Icon icon="bx:down-arrow" style="font-size: 3vh; color:#176B87;"/>
        </div>
    {/if}
</section>

<style>
    @font-face {
        font-family: 'LouisGeorgeCafe';
        font-style: normal;
        src: url(../../RandyGG/randy-gg.ttf);
        }
    :root{
        background-color: #001C30;
        color: #DAFFFB;
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
    .part1{
        min-height: 200vh;
    }
    h1{
        margin: 0;
        padding: 10px;
        font-family: LouisGeorgeCafe;
        font-size:5vh;
    }
    .name {
    color: #64CCC5;
    }
    h2{
        font-family: LouisGeorgeCafe;
    }
    .header{
        --cursor-color: white;
        --cursor-width: 4px;
        text-align: center;
        padding-top: 30vh;
    }
    .links{
        padding-top: 2.5vh;
    }
    .githubIcon::hover{
        animation: bounce 2s infinite;
    }
    ul{
        list-style: none;
        padding: 0;
    }
    li{
        display: inline;
    }
    .githubIcon{
        padding-right: 2vh;
    }
    img:hover{
        transform: scale(1.3);
        transition: 0.4s;
    }
    .mailIcon{
        padding-left: 2vh;
    }
    .iconDown{
        min-width: 100%;
        text-align: center;
        position: absolute;
        bottom: 1.5vh;
        animation: bounce 2s infinite;
    }
</style>