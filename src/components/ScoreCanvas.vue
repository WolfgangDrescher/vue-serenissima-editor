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
        fontSize: {
            type: Number,
            default: 5,
        },
        fontSizeUnit: {
            type: String,
            default: 'rem',
        },
    },
    data() {
        return {
            context: null,
        };
    },
    computed: {
        getFontSize() {
            return this.fontSize + this.fontSizeUnit;
        },
    },
    watch: {
        score() {
            renderCanvas(this.$refs.scoreCanvas, this.score);
        },
        getFontSize() {
            renderCanvas(this.$refs.scoreCanvas, this.score, null, this.getFontSize);
        },
    },
    mounted() {
        renderCanvas(this.$refs.scoreCanvas, this.score, this.$el.clientWidth, this.getFontSize);
        window.addEventListener('resize', this.onResize);
    },
    destroyed() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        onResize() {
            renderCanvas(this.$refs.scoreCanvas, this.score, this.$el.clientWidth, this.getFontSize);
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
