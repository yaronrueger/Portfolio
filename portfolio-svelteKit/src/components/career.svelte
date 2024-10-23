<script>
     import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
</script>

<main>
    <div class="header">
        <h2 class=" text-portfolioDark2-100 dark:text-portfolioDark2-200">
            career
        </h2>
    </div>
    <div class="timeline">
        <div>
            <Timeline>
                <TimelineItem 
                title="Artificial Intelligence and Neural Networks Workshop" 
                date="February 2nd 2020">
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                        Through my awakened interest in computer science through school, 
                        I participated in a workshop on artificial intelligence to learn the basics.
                    </p>
                </TimelineItem>
                <TimelineItem 
                title="High School Graduation" 
                date="July 16th 2021" >
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        On July 16, 2021, I successfully completed my high 
                        school diploma at Gymnasium Münchberg.
                    </p>
                </TimelineItem>
                <TimelineItem 
                title="Computer Science Degree" 
                date="October 1st 2021">
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                        I studied computer science as a dual student at Telekom Technik AG from October 1, 
                         2021 to September 30, 2024.
                    </p>
                </TimelineItem>
               <TimelineItem 
                title="Project Engineer Backend" 
                date="October 1st 2024">
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                        Since October 1, 2024, I have been working at T-Systems International GmbH as a Project Engineer in the backend area.
                    </p>
                </TimelineItem>
            </Timeline>
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
        padding-bottom: 12vh;
    }
    h2{
        font-size: 2.6em;
    }
    .header{
        padding-top: 3vh;
        text-align: center;
    }
    .timeline{
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 1200px) {
        .header{
            padding-top: 2vh;
        }
        main{
            padding-bottom: 2vh;
        }
    }
</style>
