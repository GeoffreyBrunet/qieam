<template>
    <div id="login">
        <img src="../assets/logo-qieam.png" alt=""><br>
        <h3>Username</h3>
        <input type="text" name="username" v-model="input.username" placeholder="Username" /><br>
        <br>
        <h3>Password</h3>
        <input type="password" name="password" v-model="input.password" placeholder="Password" /><br>
        <br>
        <button type="button" v-on:click="login()"><i class="lni lni-enter"></i></button><br>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "profile" }).catch(()=>{});
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
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
    button{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    h3{
        text-align: left;
        padding-left: 42.5%;
    }
    img{
        max-width: 15%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    input{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>