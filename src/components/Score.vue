<template>
    <div class="vse__score">{{ score }}</div>
</template>

<script>
export default {
    props: {
        score: {
            type: String,
            default: '',
        },
    },
};
</script>

<style scoped lang="scss">
    .vse__score {
        font-family: 'Serenissima';
        font-size: 5rem;
        font-variant-ligatures: normal;
        word-break: break-all;
        padding: 15px;
    }
</style>
