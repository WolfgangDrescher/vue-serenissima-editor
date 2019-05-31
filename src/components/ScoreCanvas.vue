<template>
    <div class="vse__score-canvas-wrapper">
        <canvas ref="scoreCanvas" class="vse__score-canvas"></canvas>
    </div>
</template>

<script>
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
            this.renderCanvas();
        },
    },
    mounted() {
        window.addEventListener('resize', this.onResize);
        this.renderCanvas();
    },
    destroyed() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        renderCanvas() {
            this.context = this.$refs.scoreCanvas.getContext('2d');
            this.setCanvasSizes();
            this.clearCanvas();
            this.context.font = '5rem Serenissima';
            this.context.textBaseline = 'top';
            this.context.fillStyle = '#2c3e50';
            this.fillTextMultiline(this.context, this.score, 0, 0, this.measureTextHeight(), this.context.canvas.clientWidth);
        },
        clearCanvas() {
            let ratio = this.pixelRatio();
            this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
            this.context.setTransform(ratio, 0, 0, ratio, 0, 0);
        },
        onResize() {
            this.renderCanvas();
        },
        setCanvasSizes() {
            let ratio = this.pixelRatio(),
                width = this.$el.clientWidth,
                height = this.$el.clientHeight;
            this.context.canvas.width = width * ratio;
            this.context.canvas.height = height * ratio;
            this.context.canvas.style.width = width + 'px';
            this.context.canvas.style.height = height + 'px';
        },
        pixelRatio() {
            let dpr = window.devicePixelRatio || 1,
                bsr = this.context.webkitBackingStorePixelRatio ||
                    this.context.mozBackingStorePixelRatio ||
                    this.context.msBackingStorePixelRatio ||
                    this.context.oBackingStorePixelRatio ||
                    this.context.backingStorePixelRatio || 1;
            return dpr / bsr;
        },
        fillTextMultiline(context, text, x, y, lineHeight, fitWidth) {
            // https://stackoverflow.com/a/4478894/9009012
            // https://codepen.io/bramus/pen/eZYqoO
            fitWidth = fitWidth || 0;
            if (fitWidth <= 0) {
                context.fillText(text, x, y);
                return;
            }
            for (let idx = 1; idx <= text.length; idx++) {
                let str = text.substr(0, idx);
                if(context.measureText(str).width > fitWidth) {
                    context.fillText(text.substr(0, idx-1), x, y);
                    this.fillTextMultiline(context, text.substr(idx-1), x, y + lineHeight, lineHeight,  fitWidth);
                    return;
                }
            }
            context.fillText(text, x, y);
        },
        measureTextHeight() {
            const ratio = 10/49;
            return this.context.measureText('C3').width / ratio;
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
