<script lang="ts">
    import Typewriter from 'svelte-typewriter'
    import { fade, blur, fly, slide, scale } from 'svelte/transition';
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';
    import Tooltip from "sv-tooltip";
    import { reveal } from 'svelte-reveal';

    let visible = false;

    onMount(()=>{ 
        visible = true; 
    })
</script>

<section class="starterPage" id="header">
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
        <div class="iconDown"  in:scale="{{delay: 2860, duration: 500}}">
            <a href="#aboutMe">
                <Icon icon="bx:down-arrow" style="font-size: 3vh; color:#176B87;"/>
            </a>
        </div>
    {/if}
</section>

<section class="aboutMePage"  id="aboutMe">
    <div class="aboutSkills">
        <div class="about">
            <div class="aboutMeHeader"  use:reveal={{ transition: "slide", delay:500}}>
                <h1>About me</h1>
            </div>
            <div class="aboutMeParent">
                <div class="textChild" use:reveal={{ transition: "fade", delay:700}}>
                    <p>
                        Hello everyone!<br> 
                        My name is Yaron Rüger and I am a dual student of Computer Science at the Hochschule Provadis in Frankfurt, Germany. My passion for technology and problem solving has led me to pursue a career in this exciting field. My skills include backend development, where I have gained experience in creating and updating efficient and scalable systems. I also have some front-end development experience, which allows me to create user-friendly interfaces for the applications I build.
                    </p>
                    <div class="skills">
                        <div class="skillsHeader" use:reveal={{ transition: "fade", delay:800}}>
                            <h2>Skills</h2>
                        </div>
                        <div class="skillsList" use:reveal={{ transition: "fade", delay:990}}>
                            <div>        
                                <Tooltip tip="Java" bottom>
                                    <Icon icon="logos:java" width="5vh" height="5vh"/>
                                </Tooltip>
                            </div>
                            <div>
                                <Tooltip tip="Python" bottom>
                                    <Icon icon="logos:python" width="5vh" height="5vh"/>
                                </Tooltip>
                            </div>
                            <div>
                                <Tooltip tip="C" bottom>
                                    <Icon icon="devicon:c" width="5vh" height="5vh" />
                                </Tooltip>
                            </div>
                            <div>
                                <Tooltip tip="PostgreSQL" bottom>
                                    <Icon icon="logos:postgresql" width="5vh" height="5vh" />
                                </Tooltip>
                            </div>
                            <div>
                                <Tooltip tip="Typescript" bottom>
                                    <Icon icon="devicon:typescript" width="5vh" height="5vh"/>
                                </Tooltip>
                            </div>
                            <div>
                                <Tooltip tip="Javascript" bottom>
                                    <Icon icon="logos:javascript" width="5vh" height="5vh"/>
                                </Tooltip>
                            </div>
                            <div>
                                <Tooltip tip="Svelte(Kit)" bottom>
                                    <Icon icon="devicon:svelte" width="5vh" height="5vh"/>
                                </Tooltip>
                            </div>
                            <div>
                                <Tooltip tip="Android" bottom>
                                    <Icon icon="flat-color-icons:android-os" width="5vh" height="5vh"/>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pictureMeChild" use:reveal={{ transition: "fade", delay:700}}>
                    <img src="../..//me.jpeg" alt="">
                </div>
            </div>
            
        </div>
        
        <div class="iconDownUp" use:reveal={{ transition: "fade", delay:1100}}>
            <div class="arrowUp">
                <a href="#header">
                    <Icon icon="mingcute:arrow-up-fill" style="font-size: 3vh" color="#176b87" />
                </a>
            </div>
            <div class="arrowDown">
                <a href="#projects">
                    <Icon icon="mingcute:arrow-down-fill" style="font-size: 3vh" color="#176b87" />
                </a>
            </div>
        </div>
    </div>
</section>

<section class="projectsPage" id="projects">
    <div class="projects">
        <div class="projectHeader">
            <h1 >Projects</h1>
        </div>

        <div class="iconUp">
            <a href="#aboutMe">
                <Icon icon="mingcute:arrow-up-fill" style="font-size: 3vh" color="#176b87" />
            </a>
        </div>
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
        display: flex;
        justify-content: center;
    }
    h1{
        margin: 0;
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
    .aboutSkills, .projects{
        width: 70%;
    }
    .about, .projects{
        padding-top: 7vh;
    }
    .aboutMeHeader, .projectHeader{
        
        color: #64CCC5;
    }
    .aboutMeParent{
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    }
    .pictureMeChild img{
        border-radius: 10%;
        width: 20vh;
        height: 30vh;
        object-fit: cover;
    }
    .textChild{
        font-size: large;
        max-width: 100vh;
        
        text-align:center;

        border-style: solid;
        border-width: 2px 0 2px 0;
        border-color: #176B87;
    }
    
    .skills{
        color: #64CCC5;
    }
    .skillsHeader{
        text-align: center;
    }
    .skillsHeader h2{
        font-size: 2.5vh;
    }
    .skillsList{
        display: flex;
        flex-direction: row;
        justify-content:center;
        gap: 20px;
        flex-wrap: wrap;
    }
    .iconDownUp, .iconUp{
        position: absolute;
        text-align: right;
        width: 80%;
    }
    .iconDown{
        text-align: center;
        position: absolute;
        width: 70%;
        top: 95.5vh;
        animation: bounce 2s infinite;
    }
    .iconDownUp{
        top: 192vh;
    }
    .iconUp{
        top: 295.5vh;
    }
</style>