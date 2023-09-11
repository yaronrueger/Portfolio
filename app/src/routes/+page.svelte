<script>
    import Typewriter from 'svelte-typewriter'
    import { fade, blur, fly, slide, scale } from 'svelte/transition';
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';
    import Tooltip from "sv-tooltip";

    let visible = false;

    onMount(()=>{ 
        visible = true; 
    })
</script>

<section class="starterPage">
    <div class="header">
        <Typewriter cursor={false} delay={500}>
            <h1>Hi, my name is <span class="name">Yaron Rüger</span></h1>
        </Typewriter>
        <Typewriter cursor={false} delay={1465}>
            <h2>dual student of computer science</h2>
        </Typewriter>
        {#if visible}
            <div class="links" in:fade="{{delay: 2500, duration: 2000}}">
                <ul>
                    <li class="githubIcon">
                        <a href="https://github.com/yaronrueger">
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
        <div id="iconDown"class="iconDown"  in:scale="{{delay: 2860, duration: 500}}">
            <a href="#aboutMe">
                <Icon icon="bx:down-arrow" style="font-size: 3vh; color:#176B87;"/>
            </a>
        </div>
    {/if}
</section>

<section class="aboutMePage">
    <div class="about">
        <div class="aboutMeHeader">
            <h1 id="aboutMe">About me</h1>
        </div>
        <div class="aboutMeParent">
            <div class="pictureMeChild">
                <img src="../..//me.jpeg" alt="">
            </div>
            <div class="textChild">
                <p>
                    Hi, I'm Yaron, I'm from Germany, Nuremberg, 
                    and I am currently studying Computer Science at 
                    University as a dual student of Deutsche Telekom AG.
                </p>
            </div>
        </div>
        
    </div>
    <div class="skills">
        <div class="skillsHeader">
            <h2>Skills</h2>
        </div>
        <div class="skillsList">
            <ul>
                <li>
                    <Tooltip tip="Java" bottom>
                        <Icon icon="logos:java" width="5vh" height="5vh"/>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip tip="Python" bottom>
                        <Icon icon="logos:python" width="5vh" height="5vh"/>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip tip="C" bottom>
                        <Icon icon="devicon:c" width="5vh" height="5vh" />
                    </Tooltip>
                </li>
                <li>
                    <Tooltip tip="PostgreSQL" bottom>
                        <Icon icon="logos:postgresql" width="5vh" height="5vh" />
                    </Tooltip>
                </li>
            </ul>
            <ul>
                <li>
                    <Tooltip tip="Typescript" bottom>
                        <Icon icon="devicon:typescript" width="5vh" height="5vh"/>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip tip="Javascript" bottom>
                        <Icon icon="logos:javascript" width="5vh" height="5vh"/>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip tip="Svelte(Kit)" bottom>
                        <Icon icon="devicon:svelte" width="5vh" height="5vh"/>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip tip="Android" bottom>
                        <Icon icon="flat-color-icons:android-os" width="5vh" height="5vh"/>
                    </Tooltip>
                </li>
            </ul>
        </div>
    </div>
    <div id="iconDown" class="iconDown2">
        <a href="#projects">
            <Icon icon="bx:down-arrow" style="font-size: 3vh; color:#176B87;"/>
        </a>
    </div>
</section>

<section class="projectsPage">
    <div class="projectHeader">
        <h1 id="projects">Projects</h1>
    </div>
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
        min-height: 300vh;
        scroll-behavior: smooth;
        font-family: LouisGeorgeCafe;
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
    .starterPage, .aboutMePage, .projectsPage{
        min-height: 100vh;
        max-height: 100vh;
    }
    h1{
        margin: 0;
        padding: 10px;
        font-size:5vh;
    }
    .name {
    color: #64CCC5;
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
    .links img:hover{
        transform: scale(1.3);
        transition: 0.4s;
    }
    .mailIcon{
        padding-left: 2vh;
    }
    .iconDown{
        text-align: center;
        position: absolute;
        bottom: 1.5vh;
        animation: bounce 2s infinite;
        width: 100%;
    }
    .aboutMeHeader, .projectHeader{
        color: #DAFFFB;
        margin-top: 5vh;
        margin-left: 30vh;
        color: #64CCC5;
    }
    .aboutMeParent{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .pictureMeChild img{
        border-radius: 200%;
        width: 20vh;
        height: 30vh;
        object-fit: cover;
    }
    .textChild{
        margin-top: 3vh;
        font-size: large;
        max-width: 100vh;
        background-color: #176B87;
        text-align:center;
        border-radius: 10px;
    }
    .skills{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #64CCC5;
    }
    .skillsHeader h2{
        font-size: 4.5vh;
    }
    .skillsList li{
        padding: 3.5vh;
    }
    .iconDown2{
        position: absolute;
        top: 199vh;
        text-align: center;
        animation: bounce 2s infinite;
        width: 100%;
    }
</style>