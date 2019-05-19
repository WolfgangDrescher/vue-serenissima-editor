<template>
    <transition-group class="vse__gui" name="vse__key-list-transition">
        <template v-for="keyCode in filteredKeyCodes">
            <key :key="keyCode.keyCode" :key-code="keyCode.keyCode" />
            <template v-for="variant in keyCode.variants">
                <key :key="keyCode.keyCode + variant" :key-code="keyCode.keyCode + variant" />
            </template>
        </template>
    </transition-group>
</template>

<script>
import Key from './Key.vue';

export default {
    components: { Key },
    data() {
        return {
            keyCodes: [
                {
                    keyCode: 'C',
                    variants: ['1' ,'2', '3', '4'],
                },
                {
                    keyCode: 'F',
                    variants: ['4' ,'3'],
                },
                {
                    keyCode: 'G',
                    variants: ['2' ,'1'],
                },
                {
                    keyCode: 'T',
                    variants: ['1' ,'2', '3', '4', '5', '6', '7', '8', '9'],
                },
                ...this.getForAllLines([
                    '1' ,'2', '3', '4', '5', '6', '7', '8', 'q', 'w', 'e',
                ]),
                ...this.getForAllLines([
                    '10' ,'20', '30', '40', '50', '60', '70', /*'80',*/ 'q0', 'w0', 'e0',
                ]),
                ...this.getForAllLines([
                    '+', '-', 'U', '.',
                ]),
                ...this.getSpecialCharacters([
                    'u', 'i', 'o', 'p', 'B', 'E', 'R',
                ]),
            ],
        };
    },
    computed: {
        lastScoreCharacter() {
            return this.$store.state.score.substr(-1);
        },
        filteredKeyCodes() {
            let result = this.keyCodes.filter(keyCode => {
                return this.lastScoreCharacter === keyCode.keyCode || (keyCode.variants.includes(this.lastScoreCharacter) === true);
            });
            return result.length ? result : this.keyCodes;
        },
    },
    methods: {
        getForAllLines(symbols) {
            let keyCodes = [];
            symbols.forEach((symbol) => {
                keyCodes.push({
                    keyCode: symbol,
                    variants: ['z', 's', 'x', 'd', 'c', 'f', 'v', 'g', 'b', 'h', 'n', 'j', 'm', 'k', ','],
                });
            });
            return keyCodes;
        },
        getSpecialCharacters(symbols) {
            let keyCodes = [];
            symbols.forEach((symbol) => {
                keyCodes.push({
                    keyCode: symbol,
                    variants: [],
                });
            });
            return keyCodes;
        },
    },
};
</script>

<style scoped lang="scss">
    @import '../assets/scss/import.scss';

    .vse__gui {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;

        > * {
            flex: 0 0 auto;
        }

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .vse__key-list-transition {
        &-move,
        &-enter-active,
        &-leave-active {
            transition: $transitionAll;
        }

        &-enter,
        &-leave-to {
            opacity: 0;
            transform: scale(0);
        }
    }
</style>
