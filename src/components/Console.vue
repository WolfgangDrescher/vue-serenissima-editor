<template>
    <div class="vse__console">
        <textarea rows="1" class="vse__input" v-model="score"></textarea>
    </div>
</template>

<script>
export default {
    computed: {
        score: {
            get() {
                return this.$store.state.score;
            },
            set(value) {
                this.$store.commit('setScore', value);
            },
        },
    },
};
</script>

<style scoped lang="scss">
    .vse__input {
        display: block;
        width: 100%;
        padding: .375rem .75rem;
        font-family: monospace;
        font-size: 1rem;
        border: 1px solid #ced4da;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-clip: padding-box;
        border-radius: .25rem;
    }
</style>
