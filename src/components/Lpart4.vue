<template>
    <div>
        <form>
            <label for="name">名前</label>
            <input type="text" id="name" v-model="myName"/>
        </form>
        <div>名前：{{myName}}</div>

    </div>
</template>

<script>
    export default {
        name: "Lpart4",
        data(){
            return {
                myName:"ゲスト",
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>