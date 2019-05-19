<template>
    <div class="vse__key" @click="add">
        <div class="vse__preview">{{ keyCode }}</div>
        <kbd>{{ keyCode }}</kbd>
    </div>
</template>

<script>
export default {
    props: {
        keyCode: {
            type: String,
            required: true,
        },
    },
    methods: {
        add() {
            this.$store.commit('setScore', this.$store.state.score + this.keyCode);
        },
    },
};
</script>

<style scoped lang="scss">
    .vse__key {
        text-align: center;
        margin: 0 5px;

        kbd {
            width: 25px;
            height: 25px;
            border: 1px solid #a9a9a9;
            border-radius: 2px;
            font-size: 12px;
            color: #7c7c7c;
            cursor: pointer;
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin: 0 auto;
            overflow: visible;
        }

        kbd:hover {
            background-color: #75b4fb;
            border: 1px solid #5a88c5;
            color: #fff;
            text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
        }
    }

    .vse__preview {
        font-family: 'Serenissima';
        font-size: 4rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>
