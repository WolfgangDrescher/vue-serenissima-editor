<template>
    <aside :class="{'vse__sidebar--is-open': $store.state.sidebarIsOpen}">
        <div class="vse__toggle-sidebar" @click="toggleSidebar">←</div>
        <h1>vue-serenissima-editor</h1>
        <p>
            By Elam Rotem and Wolfgang Drescher
            <a href="https://www.earlymusicsources.com/more/font-serenissima">Early Music Sources</a>
        </p>
    </aside>
</template>

<script>
export default {
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
        display: block;
        background-color: rgba(0,0,0,.05);
    }
    .vse__toggle-sidebar {
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        background-color: $borderColor;
        transform: translateX(-100%);
        transition: $transitionAll;
    }
    .vse__sidebar--is-open .vse__toggle-sidebar {
        transform: translateX(0) scaleX(-1);
    }
</style>
