import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        score: '',
        sidebarIsOpen: false,
    },
    mutations: {
        setScore(state, value) {
            state.score = value;
        },
        toggleSidebar(state) {
            state.sidebarIsOpen = !state.sidebarIsOpen;
        },
    },
});
