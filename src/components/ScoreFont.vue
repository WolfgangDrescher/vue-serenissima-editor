<template>
    <div class="vse__score-font" :style="{fontSize: getFontSize}">{{ score }}</div>
</template>

<script>
export default {
    props: {
        fontSize: {
            type: Number,
            default: 5,
        },
        fontSizeUnit: {
            type: String,
            default: 'rem',
        },
        score: {
            type: String,
            default: '',
        },
    },
    computed: {
        getFontSize() {
            return this.fontSize + this.fontSizeUnit;
        },
    },
};
</script>

<style scoped lang="scss">
    .vse__score-font {
        font-family: 'Serenissima';
        font-size: 5rem;
        font-variant-ligatures: normal;
        word-break: break-all;
    }
</style>
