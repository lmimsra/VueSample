<template>
    <div>
        <p>イベントの基本</p>
        <button v-on:click="onclick">bindクリック</button>
        <button @click="onclick">@クリック</button>
        <p>now->{{message}}</p>
        <button @click="getEvent('こんにちは',$event)">イベント情報取得</button>
    </div>
</template>

<script>
    /* eslint-disable no-console */


    export default {
        name: "Lpart3",
        data() {
            return {
                message:"",
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
            }
        }
    }

</script>

<style scoped>

</style>