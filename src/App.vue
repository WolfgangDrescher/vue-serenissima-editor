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
    @import './assets/scss/import.scss';

    .vse__app {
        width: 100%;
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $textColor;
    }
</style>
