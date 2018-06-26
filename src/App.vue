<template>
    <div id="app" class="accbox">
        <MyHeader></MyHeader>
        <p v-if="msg.length > 0">{{msg}}</p>
        <p v-else>no text</p>
        <p>入力<input id="in_text" placeholder="input here" type="text" v-model="msg"/>
        <button @click="clear()">clear</button>
        </p>
        <p>ソースコードは<a href="https://github.com/lmimsra/VueSample">コチラ</a></p>
        <input type="checkbox" id="label1" class="cssacc" />
        <label class="menu-label" for="label1">Vueの基本</label>
        <div class="accshow">
            <p>Lpart2.vue</p>
            <Lesson2></Lesson2>
        </div>

        <input type="checkbox" id="label2" class="cssacc" />
        <label class="menu-label" for="label2">イベント処理</label>
        <div class="accshow">
            <p>Lpart3.vue</p>
            <Lesson3></Lesson3>
        </div>

        <input type="checkbox" id="label3" class="cssacc" />
        <label class="menu-label" for="label3">フォーム開発</label>
        <div class="accshow">
            <p>Lpart4.vue</p>
            <Lesson4></Lesson4>
        </div>

        <input type="checkbox" id="label4" class="cssacc" />
        <label class="menu-label" for="label4">条件分岐とループ</label>
        <div class="accshow">
            <p>Lpart5.vue</p>
            <Lesson5></Lesson5>
        </div>

        <input type="checkbox" id="label5" class="cssacc" />
        <label class="menu-label" for="label5">moreデータバインディング</label>
        <div class="accshow">
            <!--ここに隠す中身-->
        </div>

        <input type="checkbox" id="label6" class="cssacc" />
        <label class="menu-label" for="label6">コンポーネント</label>
        <div class="accshow">
            <!--ここに隠す中身-->
        </div>

        <input type="checkbox" id="label7" class="cssacc" />
        <label class="menu-label" for="label7">ディレクティブ/フィルター/プラグイン</label>
        <div class="accshow">
            <!--ここに隠す中身-->
        </div>

        <input type="checkbox" id="label8" class="cssacc" />
        <label class="menu-label" for="label8">ルーティング</label>
        <div class="accshow">
            <!--ここに隠す中身-->
        </div>

    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import MyHeader from './components/MyHeader';
    import Lesson2 from './components/Lpart2';
    import Lesson3 from './components/Lpart3';
    import Lesson4 from './components/Lpart4';
    import Lesson5 from './components/Lpart5';

    export default {
        components: {
            MyHeader,
            Lesson2,
            Lesson3,
            Lesson4,
            Lesson5,

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
    .accbox .menu-label {
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
    .accbox .menu-label:before {
        /*content: '\f054';*/
        font-family: 'FontAwesome';
        padding-right: 8px;
    }

    /*ラベルホバー時*/
    .accbox .menu-label:hover {
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
    .cssacc:checked + .menu-label + .accshow {
        height: auto;
        padding: 5px;
        background: #f5ffef;
        opacity: 1;
    }

    .accbox .accshow p {
        margin: 15px 10px}

    /*アイコンを入れ替える*/
    .cssacc:checked + .menu-label:before {
        /*content: '\f078';*/
    }
</style>
