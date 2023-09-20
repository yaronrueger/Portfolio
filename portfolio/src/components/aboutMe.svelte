<main>
    <div class="header">
        <h1 class=" text-portfolioDark2-100 dark:text-portfolioDark2-200">About Me</h1>
    </div>
    <div class="text">
        <p class="mx-auto text-black dark:text-portfolioDark2-300">
            Hello everyone!<br> 
            My name is <span class="underline text-portfolioDark2-100 dark:text-portfolioDark2-200">Yaron Rüger</span> and I am studying Computer Science 
            at the <span class="underline text-portfolioDark2-100 dark:text-portfolioDark2-200">Hochschule Provadis</span> in Frankfurt, Germany. 
            My passion for technology and problem solving has led me to pursue a career in this exciting field. 
            My skills include <span class="underline text-portfolioDark2-100 dark:text-portfolioDark2-200">backend</span> development, 
            where I have gained experience in creating and updating efficient and scalable systems. 
            I also have some <span class="underline text-portfolioDark2-100 dark:text-portfolioDark2-200">frontend</span> development experience, 
            which allows me to create user-friendly interfaces for the applications I build. 
        </p>
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
    h1{
        font-size: 4em;
    }
    p{
        font-family:LouisGeorgeCafe;
        font-size: 1.5em;
        padding-top: 45px;
        width: 60%;
    }

    @media screen and (max-width: 1200px) {
        .picture img{
            height: 150px;
            width: 150px;
        }
        .text p{
            font-size: 1em;
            width: 80%;
        }
        main{
            width: 100%;
        }
        .header{
            text-align: center;
        }
        .header h1{
            font-size: 3em;
        }
    }
</style>