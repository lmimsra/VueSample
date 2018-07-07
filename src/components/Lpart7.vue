<template>
    <div>
        <strong>prop</strong>
        <p>{{currentNum}}:<input type="button" @click="countUp" value="カウントアップ"/></p>
        <p><slot name="title"></slot></p>
    </div>
</template>

<script>
    export default {
        name: "Lpart7",
        data() {
            return {
                currentNum: this.count ? this.count : this.count.default,
            }
        },
        methods: {
            countUp: function () {
                this.currentNum++
            }
        },
        //親要素から受け取る
        props: {
            count: {
                type: Number,
                default: 1,
                required: false,
                validator: value => {
                    return value.max <= 5
                }
            }
        }
    }
</script>

<style scoped>

</style>