<template>
  <div id="friends" class="friends">
    <img src="../assets/logo-qieam.png" alt=""><br>
    <button type="button" v-on:click="leftButton() "><i class="lni lni-arrow-left"></i></button><br>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'profile',
        
        methods: {

          getRequestFriends() {

            var axios = require('axios');

            var config = {
              method: 'get',
              url: 'https://qieam-api.herokuapp.com/api/friends',
              headers: { 
                'Authorization': 'Basic ZjYyNGI3OWYzOTk0NDU0OWQ0NGY4NzM3ZjM2ZDliNzc6ZjYyNGI3OWYzOTk0NDU0OWQ0NGY4NzM3ZjM2ZDliNzc='
              }
            };

            axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);
            });
          },

          leftButton() {
              this.$router.replace({ name: "profile" }).catch(()=>{});
          }
        },

        beforeMount(){
              this.getRequestFriends()
        },
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
        display: left;
        margin-left: auto;
        margin-right: auto;
    }
    img{
        max-width: 15%;
        display: left;
        margin-left: auto;
        margin-right: auto;
    }
</style>