<template>
    <div class="vse__editor">
        <score :score="$store.state.score" />
        <div class="vse__footer">
            <console />
            <gui class="vse__gui" />
        </div>
    </div>
</template>

<script>
import Score from '../components/Score.vue';
import Console from '../components/Console.vue';
import Gui from '../components/Gui.vue';

export default {
    components: { Score, Console, Gui },
    data() {
        return {
            score: '',
        };
    },
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
