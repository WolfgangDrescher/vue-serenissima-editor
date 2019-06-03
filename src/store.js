import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        fontSize: 5,
        fontSizeUnit: 'rem',
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
        setFontSize(state, value) {
            state.fontSize = value;
        },
    },
    getters: {
        getFontSize: state => {
            return state.fontSize + state.fontSizeUnit;
        },
    },
});
