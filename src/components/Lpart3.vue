<template>
    <div>
        <p>イベントの基本</p>
        <button v-on:click="onclick">bindクリック</button>
        <button @click="onclick">@クリック</button>
        <p>now->{{message}}</p>
        <button @click="getEvent('こんにちは',$event)">イベント情報取得</button><br/>
        <button @click.once="onclickOnce">一度キリのボタン</button>
        <p>once->{{dateOnce}}</p>
        <input type="text" @keyup.esc="clear" v-model="name" placeholder="下に値が表示されます"/>
        <p>name->{{name}}</p>

    </div>
</template>

<script>
    /* eslint-disable no-console */


    export default {
        name: "Lpart3",
        data() {
            return {
                message:"",
                dateOnce:"",
                name:"",
            }
        },
        methods:{
            onclick:function (e) {
                this.message = new Date().toLocaleString();
                console.log(e);
            },
            getEvent:function (message,e) {
              console.log(message);
              console.log(e);
            },
            onclickOnce: function () {
                this.dateOnce = new Date().toLocaleString();
            },
            clear:function () {
                this.name = "";
            }
        }
    }

</script>

<style scoped>

</style>