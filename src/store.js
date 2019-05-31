import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        score: '',
        sidebarIsOpen: false,
        scoreMode: 'ScoreCanvas',
    },
    mutations: {
        setScore(state, value) {
            state.score = value;
        },
        toggleSidebar(state) {
            state.sidebarIsOpen = !state.sidebarIsOpen;
        },
        toggleScoreMode(state) {
            state.scoreMode = state.scoreMode === 'ScoreCanvas' ? 'ScoreFont' : 'ScoreCanvas';
        },
        setScoreMode(state, value) {
            state.scoreMode = value;
        },
    },
});
