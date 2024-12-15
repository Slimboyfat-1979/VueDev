
<template>
    <TheBanner></TheBanner>
    <router-view></router-view>
</template>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>

<script>
    import TheBanner from './components/TheBanner.vue';
    export default {
        components: {
            TheBanner
        }
    }

</script>

