<template>
    <div class="vse__app">
        <editor />
    </div>
</template>

<script>
import Editor from './views/editor.vue';

export default {
    components: { Editor },
};
</script>

<style scoped lang="scss">
    .vse__app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
