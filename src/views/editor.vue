<template>
    <div :class="['vse__editor', {'vse__editor--sidebar-is-open': $store.state.sidebarIsOpen}]">
        <div class="vse__main-wrapper">
            <div class="vse__main">
                <div class="vse__header">
                    <gui class="vse__gui" />
                    <console />
                </div>
                <div class="vse__score-wrapper">
                    <component :is="$store.state.scoreMode" :score="$store.state.score" :font-size="this.$store.state.fontSize" :font-size-unit="this.$store.state.fontSizeUnit" />
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
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 100%;
    }
    .vse__header {
        padding: 1rem;
        border-bottom: 1px solid $borderColor;
    }
    .vse__gui {
        margin-bottom: 1rem;
    }
    .vse__main-wrapper {
        height: 100%;
        transition: $transitionAll;
    }
    .vse__main {
        position: relative;
        height: 100%;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }
    .vse__score-wrapper {
        padding: 15px;
        flex-grow: 1;
        overflow-y: auto;
    }
    .vse__aside {
        position: absolute;
        width: $sidebarWidth;
        height: 100%;
        right: 0;
        top: 0;
        transform: translateX(100%);
        transition: $transitionAll;
    }
    .vse__editor--sidebar-is-open .vse__main-wrapper {
        padding-right: $sidebarWidth;
    }
    .vse__editor--sidebar-is-open .vse__aside {
        transform: translateX(0);
    }
</style>
