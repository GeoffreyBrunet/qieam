<template>
  <div id="friends" class="friends">
    <img src="../assets/logo-qieam.png" alt=""><br>
    <button type="button" v-on:click="redirectProfile()"><i class="lni lni-arrow-left"></i></button><br>
  </div>
</template>

<script>
    export default {
        methods: {
            redirectProfile() {
                this.$router.replace({ name: "profile" });
            }
        }
    }
</script>

<style scoped>
    body {
        width: 100%;
        display: block;
        background-color: #ffffff;
        margin: auto;
        margin-top: 700px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }
    img{
        max-width: 15%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>