<template>
    <div id="app">
        <MyHeader></MyHeader>
        <p v-if="msg.length > 0">{{msg}}</p>
        <p v-else>no text</p>
        <label for="in_text">入力</label>
        <input id="in_text" placeholder="input here" type="text" v-model="msg"/>
        <button @click="clear()">clear</button>

    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import MyHeader from './components/header';
    import Lesson2 from './components/Lpart2';

    export default {
        components: {
            MyHeader,
            Lesson2

        },
        data() {
            return {
                msg: "Hello World"
            }
        },
        methods: {
            clear() {
                this.msg = '';
            }
        }



        // name: 'app',
        // components: {
        //   HelloWorld
        // }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
