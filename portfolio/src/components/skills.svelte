<script>
    import Tooltip from "sv-tooltip";
    import Icon from '@iconify/svelte';
    import { AdvancedRating, Rating, ScoreRating } from 'flowbite-svelte';
    let skills =[
                {tip:"Java",                    icon:"logos:java",                      points:87},
                {tip:"Python",                  icon:"logos:python",                    points:85},
                {tip:"PostgreSQL",              icon:"logos:postgresql",                points:75},
                {tip:"Android + Java/Kotlin",   icon:"flat-color-icons:android-os",     points:77},
                {tip:"C",                       icon:"devicon:c",                       points:60},
                {tip:"Typescript",              icon:"devicon:typescript",              points:65},
                {tip:"Javascript",              icon:"logos:javascript",                points:60},
                {tip:"Svelte(Kit)",             icon:"devicon:svelte",                  points:74}
    ]
</script>

<main>
    <div class="skillsHeader">
        <h2 class=" text-portfolioDark2-100 dark:text-portfolioDark2-200">
            Skills
        </h2>
    </div>
    <div class="skillsParent">
    <div class="skills">
        {#each skills as skill}
            <div class="skill">
                <div class="skillIcon">        
                    <Tooltip tip={skill.tip} style="font-size:1.5vh" bottom>
                        <Icon icon={skill.icon} width="5vh" height="5vh"/>
                    </Tooltip>
                </div>
                <div class="skillBar">
                    <AdvancedRating
                    ratingClass="h-2 bg-portfolioDark2-100 dark:bg-portfolioDark2-200 rounded"
                    ratingDivClass="'mx-4 w-full h-2 bg-gray-200 rounded dark:bg-gray-700"
                    divClass="flex items-center mt-2"
                    rightLabelClass="hidden"
                    unit="hidden"
                        ratings={[
                            {label:'', rating:skill.points}
                        ]}>
                    </AdvancedRating>
                </div>
            </div>
        {/each}
    </div>
    </div>
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
    main{
        width: 80%;
        font-family:LouisGeorgeCafeLight;
    }
    h2{
        font-size: 2.6em;
    }
    .skillsHeader{
        padding-top: 9vh;
        text-align: center;
    }
    .skills{
        width: 60%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .skillsParent{
        display: flex;
        justify-content: center;
    }
    @media screen and (max-width: 1200px) {
        .skillsHeader{
        padding-top: 4vh;
    }
    }
</style>