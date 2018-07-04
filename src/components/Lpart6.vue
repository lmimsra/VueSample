<template>
    <div>
        <strong>multi bind</strong><br/>
        <label for="message">メッセージ</label>
        <input id="message" type="text" v-bind="attrs"/><br/>
        <strong>v-once</strong><br/>
        <label for="name">氏名：</label>
        <input type="text" id="name" v-model="name"/>
        <p v-once>{{name}}</p>
        <p>{{name}}</p>
        <strong>Styleバインディング</strong>
        <p v-bind:style="{backgroundColor:'blue',fontSize:'1.5em',color:'white'}">{{message}}</p>
        <strong>classバインディング</strong>
         <p v-bind:class="{color:true,frame:isChange}">{{message}}</p>
        <strong>v-cloak</strong>
        <p v-cloak>{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: "Lpart6",
        data() {
            return {
                attrs: {
                    size: 20,
                    maxLength: 15,
                    required: true,
                },
                name:'ゲスト',
                message: 'コンニチハ',
                isChange:true
            }
        }
    }
</script>

<style scoped>
.color{
    color: #2c3e50;
}
    .fra{
        background-color: #bdffb2;
    }
</style>