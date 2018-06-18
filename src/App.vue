<template>
    <div id="app" class="accbox">
        <MyHeader></MyHeader>
        <p v-if="msg.length > 0">{{msg}}</p>
        <p v-else>no text</p>
        <p>入力<input id="in_text" placeholder="input here" type="text" v-model="msg"/>
        <button @click="clear()">clear</button>
        </p>
        <input type="checkbox" id="label1" class="cssacc" />
        <label for="label1">Vueの基本</label>
        <div class="accshow">
            <Lesson2></Lesson2>
        </div>
        <!--//ラベル1-->
        <!--ラベル2-->
        <input type="checkbox" id="label2" class="cssacc" />
        <label for="label2">イベント処理</label>
        <div class="accshow">
            <Lesson3></Lesson3>
        </div>
        <!--//ラベル2-->
        <!--ラベル3-->
        <input type="checkbox" id="label3" class="cssacc" />
        <label for="label3">フォーム開発</label>
        <div class="accshow">
            <!--ここに隠す中身-->
        </div>
        <!--//ラベル3-->
        <!--ラベル4-->
        <input type="checkbox" id="label4" class="cssacc" />
        <label for="label4">条件分岐とループ</label>
        <div class="accshow">
            <!--ここに隠す中身-->
        </div>
        <!--//ラベル4-->
        <!--ラベル5-->
        <input type="checkbox" id="label5" class="cssacc" />
        <label for="label5">moreデータバインディング</label>
        <div class="accshow">
            <!--ここに隠す中身-->
        </div>
        <!--//ラベル5-->
        <!--ラベル5-->
        <input type="checkbox" id="label6" class="cssacc" />
        <label for="label6">コンポーネント</label>
        <div class="accshow">
            <!--ここに隠す中身-->
        </div>
        <!--//ラベル5-->
        <!--ラベル5-->
        <input type="checkbox" id="label7" class="cssacc" />
        <label for="label7">ディレクティブ/フィルター/プラグイン</label>
        <div class="accshow">
            <!--ここに隠す中身-->
        </div>
        <!--//ラベル5-->
        <!--ラベル5-->
        <input type="checkbox" id="label8" class="cssacc" />
        <label for="label8">ルーティング</label>
        <div class="accshow">
            <!--ここに隠す中身-->
        </div>
        <!--//ラベル5-->
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import MyHeader from './components/MyHeader';
    import Lesson2 from './components/Lpart2';
    import Lesson3 from './components/Lpart3';

    export default {
        components: {
            MyHeader,
            Lesson2,
            Lesson3

        },
        data() {
            return {
                msg: "Hello Vue.js"
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
        /*content: '\f054';*/
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
        background: #f5ffef;
        opacity: 1;
    }

    .accbox .accshow p {
        margin: 15px 10px}

    /*アイコンを入れ替える*/
    .cssacc:checked + label:before {
        /*content: '\f078';*/
    }
</style>
