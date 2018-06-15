<template>
    <div id="part2">
        <p>Mustache構文→{{msg}}</p>
        directive↓<p v-text="msg"></p>
        <p v-pre>式無効化{{msg2}}</p>
        <p>{{innerhtml}}</p>
        <p v-html="innerhtml"></p>

    </div>
</template>

<script>
    export default {
        name: "Lpart2",
        data(){
            return {
                msg:"Sample Text",
                msg2:"v-preで式無効化",
                innerhtml:"<h3>こんにちは！</h3>"
            }
        }
    }


</script>

<style scoped>

</style>