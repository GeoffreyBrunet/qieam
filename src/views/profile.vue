<template>
  <div id="profile" class="profile">
    <img src="../assets/logo-qieam.png" alt=""><br>
    <h3>Mes jeux</h3>
    <p>{{ games }}</p>
    <h3>Les prochaines sorties</h3>
    <p>{{ store }}</p>
    <button type="button" v-on:click="friendsButton()"><i class="lni lni-arrow-right"></i></button><br>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'profile',

         data () {
            return {
              games: null,
              store: null
            }
        },

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
            .then(response => (this.games = response.data.games))
            .catch(function (error) {
              console.log(error);
            });
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
            .then(response => (this.store = response.data.games))
            .catch(function (error) {
              console.log(error);
            });
          },

          friendsButton() {
              this.$router.replace({ name: "friends" }).catch(()=>{});
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