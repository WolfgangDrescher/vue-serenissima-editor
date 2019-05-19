import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        score: '',
    },
    mutations: {
        setScore(state, value) {
            state.score = value;
        },
    },
});
