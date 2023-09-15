<script lang="ts">
    import Typewriter from 'svelte-typewriter';
    import { fade, blur, fly, slide, scale } from 'svelte/transition';
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';
    import Tooltip from "sv-tooltip";
    import { reveal } from 'svelte-reveal';
    import GithubRepos from '../lib/githubRepos.svelte';
    import { Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownDivider} from 'flowbite-svelte';

    let visible = false;

    onMount(() => {
        visible = true;
    });

    let skills =[
            {tip:"Java", icon:"logos:java"},
            {tip:"Python",icon:"logos:python"},
            {tip:"C",icon:"devicon:c"},
            {tip:"PostgreSQL",icon:"logos:postgresql"},
            {tip:"Android",icon:"flat-color-icons:android-os"},
            {tip:"Typescript",icon:"devicon:typescript"},
            {tip:"Javascript",icon:"logos:javascript"},
            {tip:"Svelte(Kit)",icon:"devicon:svelte"}
        ]
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
                    <div class="githubIcon">
                        <a href="https://github.com/yaronrueger">
                            <img  src="../../githubIcon.svg" alt="">
                        </a>
                    </div>
                    <div class="mailIcon">
                        <a href="https://github.com">
                            <img  src="../../mailIcon.svg" alt="">
                        </a>
                    </div>
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
                <div class="picture" use:reveal={{ transition: "fade", delay:700}}>
                    <img src="../..//me.jpeg" alt="" class="rounded-full"/>
                </div>
                <div class="textChild" use:reveal={{ transition: "fade", delay:700}}>
                    <p>
                        Hello everyone!<br> 
                        My name is Yaron Rüger and I am studying Computer Science at the Hochschule Provadis in Frankfurt, Germany. My passion for technology and problem solving has led me to pursue a career in this exciting field. <br> 
                        My skills include backend development, where I have gained experience in creating and updating efficient and scalable systems. I also have some front-end development experience, which allows me to create user-friendly interfaces for the applications I build.
                    </p>
                </div>
                <div class="skills">
                    <div class="skillsHeader" use:reveal={{ transition: "fade", delay:800}}>
                        <h2>Skills</h2>
                    </div>
                    <div class="skillsList" use:reveal={{ transition: "fade", delay:990}}>
                        {#each skills as skill}
                        <div>        
                            <Tooltip tip={skill.tip} style="font-size:2vh" bottom>
                                <Icon icon={skill.icon} width="5vh" height="5vh"/>
                            </Tooltip>
                        </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="projectsPage" id="projects">
    <div class="projects">
        <div class="projectHeader">
            <h1 >Projects</h1>
        </div>
        <div class="repos">
            <GithubRepos></GithubRepos>
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
    .starterPage, .aboutMePage, .projectsPage h1{
        margin: 0;
        font-size:5vh;
    }
    .starterPage h2{
        font-size: 2.5vh;
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
    .links{
        display: flex;
        justify-content: center;
        gap: 30px;
    }
    .links img:hover{
        transform: scale(1.3);
        transition: 0.4s;
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
        flex-direction: column;
        align-items: center;
    }
    .picture{
        width: 150px;
        height: 150px;
        overflow: hidden;
        border-radius: 50%;
        margin-bottom: 1.5vh;
    }
    .aboutMeParent img{
        width: 100%;
        height: auto;
        object-fit: cover;
        display: block;
    }
    .textChild{
        max-width: 100vh;
        text-align:center;
        border-style: solid;
        border-width: 2px 0 2px 0;
        border-color: #176B87;
        font-size: 2vh;
    }
    .skills{
        color: #64CCC5;
        padding-top: 1.5vh;
    }
    .skillsHeader{
        text-align: center;
        margin-bottom: 2vh;
    }
    .skillsHeader h2{
        font-size: 3.5vh;
    }
    .skillsList{
        display: flex;
        flex-direction: row;
        justify-content:center;
        gap: 30px;
        flex-wrap: wrap;
    }
    .iconDown{
        text-align:end;
        position: absolute;
        top: 95.5vh;
        animation: bounce 2s infinite;
    }
</style>