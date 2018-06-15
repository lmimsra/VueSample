<template>
    <div id="app" class="accbox">
        <MyHeader></MyHeader>
        <p v-if="msg.length > 0">{{msg}}</p>
        <p v-else>no text</p>
        <label for="in_text">入力</label>
        <input id="in_text" placeholder="input here" type="text" v-model="msg"/>
        <button @click="clear()">clear</button>

        <input type="checkbox" id="label1" class="cssacc" />
        <label for="label1">Vueの基本</label>
        <div class="accshow">
            <Lesson2></Lesson2>
        </div>
        <!--//ラベル1-->
        <!--ラベル2-->
        <input type="checkbox" id="label2" class="cssacc" />
        <label for="label2">Photoshop</label>
        <div class="accshow">
            <!--ここに隠す中身-->
        </div>
        <!--//ラベル2-->
        <!--ラベル3-->
        <input type="checkbox" id="label3" class="cssacc" />
        <label for="label3">WordPress</label>
        <div class="accshow">
            <!--ここに隠す中身-->
        </div>
        <!--//ラベル3-->
        <!--ラベル4-->
        <input type="checkbox" id="label4" class="cssacc" />
        <label for="label4">Material Design</label>
        <div class="accshow">
            <!--ここに隠す中身-->
        </div>
        <!--//ラベル4-->
        <!--ラベル5-->
        <input type="checkbox" id="label5" class="cssacc" />
        <label for="label5">Design Tips</label>
        <div class="accshow">
            <!--ここに隠す中身-->
        </div>
        <!--//ラベル5-->
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
        margin: 60px auto;
    }
    /*ボックス全体*/
    .accbox {
        margin: 2em 0;
        padding: 0;
        max-width: 400px;/*最大幅*/
    }

    /*ラベル*/
    .accbox label {
        display: block;
        margin: 1.5px 0;
        padding : 13px 12px;
        color: #3ba266;
        font-weight: bold;
        background: #bdffb2;
        cursor :pointer;
        transition: all 0.5s;
    }

    /*アイコンを表示*/
    .accbox label:before {
        content: '\f054';
        font-family: 'FontAwesome';
        padding-right: 8px;
    }

    /*ラベルホバー時*/
    .accbox label:hover {
        background : #2f9160;
        color: aliceblue;
    }

    /*チェックは隠す*/
    .accbox .cssacc {
        display: none;
    }

    /*中身を非表示にしておく*/
    .accbox .accshow {
        height: 0;
        padding: 0;
        overflow: hidden;
        opacity: 0;
        transition: 0.8s;
    }

    /*クリックで中身表示*/
    .cssacc:checked + label + .accshow {
        height: auto;
        padding: 5px;
        background: #dbffd7;
        opacity: 1;
    }

    .accbox .accshow p {
        margin: 15px 10px}

    /*アイコンを入れ替える*/
    .cssacc:checked + label:before {
        content: '\f078';
    }
</style>
