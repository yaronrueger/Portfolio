<script>
    import Typewriter from 'svelte-typewriter'
    import { fade, blur, fly, slide, scale } from "svelte/transition";
    </script>

<main>
    <div class="header">
        <Typewriter cursor={false} delay={500}>
            <h1>Hi, my Name is Yaron Rüger</h1>
        </Typewriter>
        <Typewriter cursor={false} delay={1465}>
            <h2>dual Student of computer science</h2>
        </Typewriter>
        <div in:fade="{{delay: 2000, duration: 2000}}" class="links">
            <p>Test</p>
        </div>
        <a href="https://github.com"><img  src="../../icons8-github.svg" alt=""></a>
    </div>
    
</main>

<style>
    @font-face {
        font-family: 'LouisGeorgeCafe';
        font-style: normal;
        src: url(../../RandyGG/randy-gg.ttf);
        }
    :root{
        background-color: #2C3333;
        color: #CBE4DE;
    }
    h1{
        margin: 0;
        padding: 10px;
        font-family: LouisGeorgeCafe;
        font-size:5vh;
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
    main{
        min-height: 100vh;
    }
</style>