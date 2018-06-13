<template>
  <div id="app">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <p v-if="msg.length > 0">{{msg}}</p>
    <p v-else>no text</p>
    <label for="in_text">入力</label>
    <input id="in_text" placeholder="input here" type="text" v-model="msg"/>
    <button @click="clear()">clear</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
    data(){
        return{
            msg:"Hello World"
        }
    },
    methods: {
        clear () {
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
