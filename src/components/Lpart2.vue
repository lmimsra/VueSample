<template>
    <div id="part2">
        <p>Mustache構文→{{msg}}</p>
        directive↓<p v-text="msg"></p>
        <p v-pre>式無効化{{msg2}}</p>
        <p>{{innerhtml}}</p>
        <p v-html="innerhtml"></p>
        <p>属性値にJS式を埋め込む</p>
        <!--<a href="{{url}}">うまく動かないリンク</a> エラーになる-->
        <a :href="url">うまく動くリンク</a>
        <p>プロパティ値の変更->{{email.split('@')[0].toLowerCase()}}</p>
        <p>Computedとmethod</p>
        <p>{{localEmail}}</p>
        <p>{{localEmailF()}}</p>
        <input type="button" @click="onclick()" value="更新"/>
        <p>算出プロパティ：{{randomc}}</p>
        <p>メソッド：{{randomm()}}</p>
        <p>現在日時：{{current}}</p>


    </div>
</template>

<script>
    export default {
        name: "Lpart2",
        data() {
            return {
                msg: "Sample Text",
                msg2: "v-preで式無効化",
                innerhtml: "<h3>こんにちは！</h3>",
                url: "https://www.lmimsra.com",
                email: "Yamada@example.com",
                current: new Date().toLocaleString()
            }
        },
        computed:{
            localEmail: function () {
                return this.email.split('@')[0].toLowerCase();
            },
            randomc: function () {
                return Math.random();
            },

        },
        methods: {
            localEmailF: function () {
                return this.email.split('@')[0].toUpperCase();
            },
            onclick: function () {
                this.current = new Date().toLocaleString()
            },
            randomm: function () {
                return Math.random();
            }
        }
    }


</script>

<style scoped>

</style>