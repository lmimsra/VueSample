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
                name:'ゲスト'
            }
        }
    }
</script>

<style scoped>

</style>