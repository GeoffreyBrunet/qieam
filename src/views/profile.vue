<template>
  <div id="profile" class="profile">
    <img src="../assets/logo-qieam.png" alt=""><br>
    <h3>Mes jeux</h3>
    <h3>Les prochaines sorties</h3>
    <button type="button" v-on:click="friendsButton()"><i class="lni lni-arrow-right"></i></button><br>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'profile',

        methods: {

          getRequest() {

            var axios = require('axios');

            var config = {
              method: 'get',
              url: 'https://qieam-api.herokuapp.com/api/library/games',
              headers: { 
                'Authorization': 'Basic ZjYyNGI3OWYzOTk0NDU0OWQ0NGY4NzM3ZjM2ZDliNzc6ZjYyNGI3OWYzOTk0NDU0OWQ0NGY4NzM3ZjM2ZDliNzc='
              }
            };

            axios(config)
            .then(function (response){
              const games = response.data;
              console.log(JSON.stringify(response.data));
              //const games = response.data
              //return games
            })

            .catch(function (error) {
              console.log(error);
            });
          },

          friendsButton() {
              this.$router.replace({ name: "friends" }).catch(()=>{});
            },

          getRequestStore() {

            var axios = require('axios');

            var config = {
              method: 'get',
              url: 'https://qieam-api.herokuapp.com/api/store/games',
              headers: { 
                'Authorization': 'Basic ZjYyNGI3OWYzOTk0NDU0OWQ0NGY4NzM3ZjM2ZDliNzc6ZjYyNGI3OWYzOTk0NDU0OWQ0NGY4NzM3ZjM2ZDliNzc='
              }
            };

            axios(config)
            .then(function (response){
              const games = response.data;
              console.log(JSON.stringify(response.data));
              //const games = response.data
              //return games
            })

            .catch(function (error) {
              console.log(error);
            });
          },
        },

        mounted(){
            this.getRequest();
            this.getRequestStore();
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
        display: right;
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