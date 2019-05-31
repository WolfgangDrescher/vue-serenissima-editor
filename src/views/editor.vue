<template>
    <div class="vse__editor">
        <div class="vse__main-wrapper">
            <div class="vse__main">
                <div class="vse__score-wrapper">
                    <component is="ScoreFont" :score="$store.state.score" />
                </div>
                <div class="vse__footer">
                    <console />
                    <gui class="vse__gui" />
                </div>
            </div>
        </div>
        <sidebar class="vse__aside" />
    </div>
</template>

<script>
import ScoreFont from '../components/ScoreFont.vue';
import ScoreCanvas from '../components/ScoreCanvas.vue';
import Console from '../components/Console.vue';
import Gui from '../components/Gui.vue';
import Sidebar from '../components/Sidebar.vue';

export default {
    components: { ScoreFont, ScoreCanvas, Console, Gui, Sidebar },
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
        padding: 1rem;
        border-top: 1px solid $borderColor;
    }
    .vse__gui {
        margin-top: 1rem;
    }
    .vse__main-wrapper {
        height: 100%;
        padding-right: $sidebarWidth;
    }
    .vse__main {
        position: relative;
        height: 100%;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }
    .vse__score-wrapper {
        flex-grow: 1;
        overflow-y: auto;
    }
    .vse__aside {
        position: absolute;
        width: $sidebarWidth;
        height: 100%;
        right: 0;
        top: 0;
    }
</style>
