<template>
    <transition-group class="vse__gui" name="vse__key-list-transition">
        <key v-for="keyCode in filteredKeyCodes" :key="keyCode" :key-code="keyCode" />
    </transition-group>
</template>

<script>
import Key from './Key.vue';

export default {
    components: { Key },
    data() {
        return {
            groups: {
                clefs: ['C', 'F', 'G'],
                timeSignatures: ['T'],
                notes: ['1' ,'2', '3', '4', '5', '6', '7', '8', 'q', 'w', 'e'],
                rests: ['10' ,'20', '30', '40', '50', '60', '70', /*'80',*/ 'q0', 'w0', 'e0'],
                additions: ['+', '-', 'U', '.'],
                specialCharacters: ['u', 'i', 'o', 'p', 'B', 'E', 'R', '*'],
            },
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
                    'u', 'i', 'o', 'p', 'B', 'E', 'R', '*',
                ]),
            ],
        };
    },
    computed: {
        allKeyCodes() {
            let keyCodes = [];
            this.keyCodes.forEach((keyCode) => {
                keyCodes.push(keyCode.keyCode);
                keyCode.variants.forEach((variant) => {
                    keyCodes.push(keyCode.keyCode + variant) ;
                });
            });
            return keyCodes;
        },
        filteredKeyCodes() {
            if(this.$store.state.score === '') {
                return this.allKeyCodes.filter((value) => {
                    return this.groups.clefs.includes(value);
                });
            }
            if(this.$store.state.score.match(/^(C|F|G)\d$/g)) {
                return this.allKeyCodes.filter((value) => {
                    return value.startsWith('T');
                });
            }
            const lastChar = this.lastChar();
            const last2Chars = this.lastChar(2);
            let results = [];
            if(last2Chars.length === 2) {
                results = this.allKeyCodes.filter((value) => {
                    if(last2Chars === value) return false;
                    return value.startsWith(last2Chars);
                });
                if(results.length) {
                    return results;
                }
            }
            if(lastChar.length === 1) {
                results = this.allKeyCodes.filter((value) => {
                    if(lastChar === value) return false;
                    if(!isNaN(lastChar) && [...this.groups.clefs, ...this.groups.timeSignatures].includes(this.lastChar(2)[0])) {
                        return false;
                    }
                    return value.startsWith(lastChar) && (value[1] !== '0') || (value === lastChar + '0');
                });
                if(results.length) {
                    return results;
                }
            }
            return this.allKeyCodes.filter((value) => {
                return this.groups.notes.includes(value);
            });
        },
    },
    methods: {
        lastChar(num) {
            return this.$store.state.score.substr(-num || -1);
        },
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
