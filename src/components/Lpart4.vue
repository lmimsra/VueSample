<template>
    <div>
        <strong>text</strong>
        <form>
            <label for="name">名前</label>
            <input type="text" id="name" v-model="myName"/>
        </form>
        <p>名前：{{myName}}</p>
        <strong>ラジオボタン</strong>
        <form>
            <label for="man">男性</label>
            <input type="radio" id="man" value="男性" v-model="gender"/>
            <label for="woman">女性</label>
            <input type="radio" id="woman" value="女性" v-model="gender"/>
            <label for="other">その他</label>
            <input type="radio" id="other" value="その他" v-model="gender"/>
        </form>
        <p>性別：{{gender}}</p>
        <strong>単一チェックボックス</strong>
        <form>
            <label for="agree">同意する：</label>
            <input id="agree" type="checkbox" v-model="agree"/><br/>
            <label for="agree-v">同意する：</label>
            <input type="checkbox" id="agree-v" v-model="agree_value" true-value="○" false-value="×"/>
        </form>
        <p>回答：{{agree}}</p>
        <p>○×回答：{{agree_value}}</p>
        <strong>複数チェックボックス</strong>
        <form>
            <div>話せる言語は？</div>
            <label for="japanese">日本語</label>
            <input type="checkbox" id="japanese" value="日本語" v-model="language"/>
            <label for="english">英語</label>
            <input type="checkbox" id="english" value="英語" v-model="language"/>
            <label for="german">ドイツ語</label>
            <input type="checkbox" id="german" value="ドイツ語" v-model="language"/>
        </form>
        <p>回答：{{language}}</p>
        <strong>セレクトボックス</strong>
        <form>
            <select v-model="select_lang">
                <option value="未回答">話せる言語は？</option>
                <option>日本語</option>
                <option>英語</option>
                <option>ドイツ語</option>
            </select>
        </form>
        <p>回答：{{select_lang}}</p>
        <strong>複数セレクトボックス</strong>
        <form>
            <select v-model="multi_select_lang" multiple size="4">
                <option value="未回答">話せる言語は？</option>
                <option>日本語</option>
                <option>英語</option>
                <option>ドイツ語</option>
            </select>
        </form>
        <p>回答：{{multi_select_lang}}</p>
        <strong>オブジェクトのバインド</strong>
        <form>
            <label for="kb">1KB:</label>
            <input type="radio" id="kb" v-model="unit" @change="change_radio"
                   v-bind:value="{name : 'キロバイト',size:1024}"/>
            <label for="mb">1MB:</label>
            <input type="radio" id="mb" v-model="unit" @change="change_radio"
                   v-bind:value="{name : 'メガバイト',size:1048576}"/>
            <label for="gb">1GB:</label>
            <input type="radio" id="gb" v-model="unit" @change="change_radio"
                   v-bind:value="{name : 'ギガバイト',size:1073742000}"/>
        </form>
    </div>
</template>

<script>

    export default {
        name: "Lpart4",
        data() {
            return {
                myName: "ゲスト",
                gender: "男性",
                agree: true,
                agree_value: "×",
                language: ['日本語'],
                select_lang: '未回答',
                multi_select_lang: [],
                unit: {},
            }
        },
        methods: {
            change_radio: function () {
                console.log(this.unit.name + ' : ' + this.unit.size);
            }
        }
    }
</script>

<style scoped>

</style>