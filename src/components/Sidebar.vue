<template>
    <aside :class="{'vse__sidebar--is-open': $store.state.sidebarIsOpen}">
        <div class="vse__sidebar-header">
            <div class="vse__toggle-sidebar" @click="toggleSidebar">←</div>
            <h1>vue-serenissima-editor</h1>
        </div>
        <div class="vse__sidebar-body">
            <div class="vse__static-keys-container">
                <h2>Static Symbols</h2>
                <div class="vse__static-keys">
                    <key v-for="keyCode in specialCharacters" :key="keyCode" :key-code="keyCode"></key>
                </div>
            </div>
            <div class="vse__settings">
                <h2>Settings</h2>
                <button @click="$store.commit('setScoreMode', 'ScoreCanvas')">Canvas</button>
                <button @click="$store.commit('setScoreMode', 'ScoreFont')">Font</button>
            </div>
        </div>
        <div class="vse__sidebar-footer">
            By Elam Rotem and Wolfgang Drescher
            <a href="https://www.earlymusicsources.com/more/font-serenissima" target="_blank">Early Music Sources</a>
        </div>
    </aside>
</template>

<script>
import Key from './Key.vue';

export default {
    components: { Key },
    data() {
        return {
            specialCharacters: ['u', 'i', 'o', 'p', 'B', 'E', 'R', '*'],
        };
    },
    methods: {
        toggleSidebar() {
            this.$store.commit('toggleSidebar');
        },
    },
};
</script>

<style scoped lang="scss">
    @import '../assets/scss/import.scss';

    aside {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        background-color: rgba(0,0,0,.05);
        padding: 15px;
    }
    .vse__toggle-sidebar {
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        background-color: $borderColor;
        transform: translateX(calc(-100% - 15px));
        transition: $transitionAll;
        cursor: pointer;
    }
    .vse__sidebar--is-open .vse__toggle-sidebar {
        transform: translateX(0) scaleX(-1);
    }
    .vse__static-keys {
        display: flex;
        flex-wrap: wrap;
    }
    .vse__sidebar-footer, .vse__sidebar-header {
        flex-shrink: 0;
    }
    .vse__sidebar-body {
        flex: 1 0 auto;
    }
</style>
