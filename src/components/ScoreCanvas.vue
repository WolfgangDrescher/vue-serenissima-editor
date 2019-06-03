<template>
    <div class="vse__score-canvas-wrapper">
        <canvas ref="scoreCanvas" class="vse__score-canvas"></canvas>
    </div>
</template>

<script>
import { renderCanvas } from '../score-canvas-methods.js';

export default {
    props: {
        score: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            context: null,
        };
    },
    watch: {
        score() {
            renderCanvas(this.$refs.scoreCanvas, this.score);
        },
    },
    mounted() {
        renderCanvas(this.$refs.scoreCanvas, this.score, this.$el.clientWidth);
        window.addEventListener('resize', this.onResize);
    },
    destroyed() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        onResize() {
            renderCanvas(this.$refs.scoreCanvas, this.score, this.$el.clientWidth);
        },
    },
};
</script>

<style scoped lang="scss">
    .vse__score-canvas-wrapper {
        width: 100%;
        height: 100%;
    }
</style>
