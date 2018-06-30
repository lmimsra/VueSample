<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

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
        max-width: 400px; /*最大幅*/
    }

    /*ラベル*/
    .accbox .menu-label {
        display: block;
        margin: 1.5px 0;
        padding: 13px 12px;
        color: #3ba266;
        font-weight: bold;
        background: #bdffb2;
        cursor: pointer;
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
        background: #2f9160;
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
        margin: 15px 10px
    }

    /*アイコンを入れ替える*/
    .cssacc:checked + .menu-label:before {
        /*content: '\f078';*/
    }
</style>
