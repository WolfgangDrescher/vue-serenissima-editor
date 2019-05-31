<template>
    <div class="vse__editor">
        <component is="ScoreCanvas" :score="$store.state.score"></component>
        <div class="vse__footer">
            <console />
            <gui class="vse__gui" />
        </div>
    </div>
</template>

<script>
import ScoreFont from '../components/ScoreFont.vue';
import ScoreCanvas from '../components/ScoreCanvas.vue';
import Console from '../components/Console.vue';
import Gui from '../components/Gui.vue';

export default {
    components: { ScoreFont, ScoreCanvas, Console, Gui },
};
</script>

<style scoped lang="scss">
    @import '../assets/scss/import.scss';

    .vse__editor {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .vse__footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 1rem;
        background-color: $footerColor;
    }
    .vse__gui {
        margin-top: 1rem;
    }
</style>
