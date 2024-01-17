<script lang="ts">
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { sineIn } from 'svelte/easing';
    import { Card,  Drawer, Button, CloseButton, DeviceMockup } from 'flowbite-svelte';
    
    let hiddenDashboardApp, hiddenDashboardBackend,hiddenKarateWebsite,hiddenQuizApp,hiddenPortfolio,hiddenPostgreSQLGUI = true;

    let transitionParamsBottom = {
        y: 320,
        duration: 200,
        easing: sineIn
    };
</script>

<main>
    <div class="header">
        <h1 class=" text-portfolioDark2-100 dark:text-portfolioDark2-200">Projects</h1>
    </div>
    <div class="reposParent">

        <div class="reposChild text-center">
            <Button color="light" class="mb-2 text-2xl font-bold tracking-tight" size="lg" on:click={() => (hiddenDashboardApp = false)}>Financial-Dashboard-System</Button>
        </div>

        <div class="reposChild text-center">
            <Button color="light" class="mb-2 text-2xl font-bold tracking-tight" size="lg" on:click={() => (hiddenDashboardBackend = false)}>Financial-Dashboard-System_Backend</Button>
        </div>

        <div class="reposChild text-center">
            <Button color="light" class="mb-2 text-2xl font-bold tracking-tight" size="lg" on:click={() => (hiddenQuizApp = false)}>Quizapp</Button>
        </div>

        <div class="reposChild text-center">
            <Button color="light" class="mb-2 text-2xl font-bold tracking-tight" size="lg" on:click={() => (hiddenKarateWebsite = false)}>Karate-Website</Button>
        </div>

        <div class="reposChild text-center">
            <Button color="light" class="mb-2 text-2xl font-bold tracking-tight" size="lg" on:click={() => (hiddenPortfolio = false)}>Portfolio</Button>
        </div>

        <div class="reposChild text-center">
            <Button color="light" class="mb-2 text-2xl font-bold tracking-tight" size="lg" on:click={() => (hiddenPostgreSQLGUI = false)}>PostgreSQL-GUI</Button>
        </div>

    </div>
</main>

<Drawer class="dark:bg-slate-950" placement="bottom" width="w-full" transitionType="fly" transitionParams={transitionParamsBottom} bind:hidden={hiddenDashboardApp} id="sidebar8">
    <CloseButton on:click={() => (hiddenDashboardApp = true)} class="absolute right-2 dark:text-white" />
    <div class="drawerParent mt-9">
        <div class="drawerText">
            <h2 id="drawer-label" class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-gray-400">
                Financial-Dashboard-System
            </h2>
            <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                The Financial Dashboard System is a user-friendly Android app for visualising and analysing financial data from a previously selected Excel spreadsheet.
            </p>
            <Button class="mt-10 mb-10" color="light" href="https://github.com/yaronrueger/Financial-Dashboard-System">GitHub</Button>
        </div>
        <div class="drawerPicture">
            <DeviceMockup>
                <img src="images/appMain.png" class="dark:hidden w-[272px] h-[572px]" alt="default example 1" />
                <img src="images/appMain.png" class="hidden dark:block w-[272px] h-[572px]" alt="default example 2" />
            </DeviceMockup>
        </div>
    </div>
</Drawer>

<Drawer class="dark:bg-slate-950" placement="bottom" width="w-full" transitionType="fly" transitionParams={transitionParamsBottom} bind:hidden={hiddenDashboardBackend} id="sidebar8">
    <CloseButton on:click={() => (hiddenDashboardBackend = true)} class="absolute right-2 dark:text-white" />
    <div class="drawerParent mt-9">
        <div class="drawerText">
            <h2 id="drawer-label" class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-gray-400">
                Financial-Dashboard-System_Backend
            </h2>
            <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                The Financial Dashboard System is a user-friendly Android app for visualising and analysing financial data from a previously selected Excel spreadsheet.
            </p>
            <Button class="mt-10 mb-10" color="light" href="https://github.com/yaronrueger/Financial-Dashboard-System-Backend">GitHub</Button>
        </div>
        <div class="drawerPicture">
        </div>
    </div>
</Drawer>

<Drawer class="dark:bg-slate-950" placement="bottom" width="w-full" transitionType="fly" transitionParams={transitionParamsBottom} bind:hidden={hiddenQuizApp} id="sidebar8">
    <CloseButton on:click={() => (hiddenQuizApp = true)} class="absolute right-2 dark:text-white" />
    <div class="drawerParent mt-9">
        <div class="drawerText">
            <h2 id="drawer-label" class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-gray-400">
                Quizapp
            </h2>
            <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                This project is a quiz app. It uses Sveltekit as the frontend and fastapi as the backend. It was created as part of a university project by a team of 6 developers.            </p>
            <Button class="mt-10 mb-10" color="light" href="https://github.com/yaronrueger/QuizWebApp">GitHub</Button>
        </div>
        <div class="drawerPicture ">
            <DeviceMockup device="desktop">
                <img src="images/quizappMain.png" class="dark:hidden h-[140px] md:h-[262px] w-full rounded-xl" alt="desktop example 1" />
                <img src="images/quizappMain.png" class="hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl" alt="desktop example 2" />
            </DeviceMockup>  
        </div>
    </div>
</Drawer>

<Drawer class="dark:bg-slate-950" placement="bottom" width="w-full" transitionType="fly" transitionParams={transitionParamsBottom} bind:hidden={hiddenKarateWebsite} id="sidebar8">
    <CloseButton on:click={() => (hiddenKarateWebsite = true)} class="absolute right-2 dark:text-white" />
    <div class="drawerParent mt-9">
        <div class="drawerText">
            <h2 id="drawer-label" class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-gray-400">
                Karate-Website
            </h2>
            <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                This web project is a website for a karate club. It provides information about the club, its members, training times and events. Currently, the website is not yet optimised for smaller screens such as mobile phones. The project uses HTML, CSS and JavaScript for frontend development.            </p>
            <Button class="mt-10 mb-10" color="light" href="https://github.com/yaronrueger/karateWebsite">GitHub</Button>
        </div>
        <div class="drawerPicture">
        </div>
    </div>
</Drawer>

<Drawer class="dark:bg-slate-950" placement="bottom" width="w-full" transitionType="fly" transitionParams={transitionParamsBottom} bind:hidden={hiddenPortfolio} id="sidebar8">
    <CloseButton on:click={() => (hiddenPortfolio = true)} class="absolute right-2 dark:text-white" />
    <div class="drawerParent mt-9">
        <div class="drawerText">
            <h2 id="drawer-label" class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-gray-400">
                Portfolio
            </h2>
            <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                This portfolio is a personal website that contains information about me and my projects. It is created with Sveltekit and Flowbite UI library (Tailwind CSS).            
            </p>
            <Button class="mt-10 mb-10" color="light" href="https://github.com/yaronrueger/Portfolio">GitHub</Button>
        </div>
        <div class="drawerPicture">
        </div>
    </div>
</Drawer>

<Drawer class="dark:bg-slate-950" placement="bottom" width="w-full" transitionType="fly" transitionParams={transitionParamsBottom} bind:hidden={hiddenPostgreSQLGUI} id="sidebar8">
    <CloseButton on:click={() => (hiddenPostgreSQLGUI = true)} class="absolute right-2 dark:text-white" />
    <div class="drawerParent mt-9">
        <div class="drawerText">
            <h2 id="drawer-label" class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-gray-400">
                PostgreSQL-GUI
            </h2>
            <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                The PostgreSQL GUI project is a Svelte-based web project that provides a user-friendly and interactive graphical user interface for the PostgreSQL database. The project focuses on the Select_Table.svelte file, which contains a table with a dropdown selection for displaying data from different tables.
            </p>
            <Button class="mt-10 mb-10" color="light" href="https://github.com/yaronrueger/PostgreSQL-GUI">GitHub</Button>
        </div>
        <div class="drawerPicture">
            <DeviceMockup device="desktop">
                <img src="images/pgeditor.png" class="dark:hidden h-[140px] md:h-[262px] w-full rounded-xl" alt="desktop example 1" />
                <img src="images/pgeditor.png" class="hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl" alt="desktop example 2" />
            </DeviceMockup>              
        </div>
    </div>
</Drawer>

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
    main{
        width: 80%;
        font-family:LouisGeorgeCafeLight;
    }
    h1{
        font-size: 4em;
    }
    .reposParent{
        padding-top: 4vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }

    .reposChild{
        display: flex;
        flex-direction: column;
        margin: 0 30vh;
    }

    .drawerParent{
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 50px;

}
    .drawerText{
        width: 40vh;
    }
    .drawerPicture{
    }


    @media screen and (max-width: 1200px) {
        .header{
            text-align: center;
            font-size: 0.7em;
        }
        .reposChild{
        margin: 0;
        }
        .drawerParent{
            flex-direction: column;
        }
    }

</style>