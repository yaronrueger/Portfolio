<script>
    import Typewriter from 'svelte-typewriter'
</script>

<main>
    <Typewriter cursor={true} delay={500}>
        <h1>Hi, my Name is Yaron Rüger</h1>
    </Typewriter>
</main>

<style>
    :root{
        background-color: #2C3333;
        color: #CBE4DE;
    }
    main{
        --cursor-color: white;
        --cursor-width: 4px;
    }
</style>