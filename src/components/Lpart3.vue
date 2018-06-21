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
        <button @click="getEvent('こんにちは',$event)">イベントを送る</button><br/>
        <textarea @keyup.alt.72="help" id="message" v-model="msg"></textarea><br/>
        <button @click.left="click2">クリック！</button>

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
                msg:"",
            }
        },
        methods:{
            onclick:function (e) {
                this.message = new Date().toLocaleString();
                console.log(e);
            },
            click2:function (e) {
                window.alert("クリックされた座標は"+e.clientX+" , "+e.clientY);
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
            },
            help:function () {
                window.alert("文字を入力してね")
            }
        }
    }

</script>

<style scoped>

</style>