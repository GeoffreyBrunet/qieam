<template>
  <div id="profile" class="profile">
    <img src="../assets/logo-qieam.png" alt=""><br>
    <h3>Mes jeux</h3>
    <h3>Les prochaines sorties</h3>
    <button type="button" v-on:click="getRequest()"><i class="lni lni-arrow-right"></i></button><br>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'profile',
        
        methods: {

          getRequest() {

            var axios = require('axios');

            var axios = require('axios');

            var config = {
              method: 'get',
              url: 'https://qieam-api.herokuapp.com/api/library/games',
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