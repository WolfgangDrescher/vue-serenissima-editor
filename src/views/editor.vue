<template>
    <div>
        <div class="vse__score">{{ score }}</div>
        <div class="vse__input">
            <input type="text" v-model="score"/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            score: '',
        };
    },
    methods: {

    },
};
</script>

<style scoped lang="scss">
    @font-face {
        font-family: Serenissima;
        src: url("../assets/EMS_Serenissima.otf") format("opentype");
    }
    .vse__score {
        font-family: 'Serenissima';
        font-size: 5rem;
        font-variant-ligatures: normal;
        word-break: break-all;
    }
    .vse__input {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 15px;
    }
    .vse__input input {
        font-size: 2rem;
        font-family: monospace;
        width: 100%;
    }
</style>
