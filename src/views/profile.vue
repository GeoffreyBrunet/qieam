<template>
  <div id="profile" class="profile">
    <img src="../assets/logo-qieam.png" alt=""><br>
    <h3>Mes jeux</h3>
    <ul>
      <li v-for="name of games" :key="name.id">
        {{ name.name }}
        <button type="button"><i class="lni lni-download"></i></button>
        <button type="button"><i class="lni lni-target"></i></button>
      </li>
    </ul>

    <h3>Les prochaines sorties</h3>
    <ul>
      <li v-for="name of store" :key="name.id">
        {{ name.name }}
        <button type="button"><i class="lni lni-shopping-basket"></i></button>
      </li>
    </ul>

    <button type="button" v-on:click="friendsButton()"><i class="lni lni-arrow-right"></i></button><br>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'profile',

         data () {
            return {
              games: [],
              store: []
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
        -webkit-font-smoothing: antialiased;
        width: 100%;
        display: block;
        background-color: #ffffff;
        margin: auto;
        margin-top: 700px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        font-family: "Avenir", Helvetica, Arial, sans-serif;
    }
    img{
        max-width: 15%;
        display: left;
        margin-left: auto;
        margin-right: auto;
    }
    li{
      display: inline-grid;
      align-items: start;
      grid-template-rows: repeat(3, 20px);
      grid-gap: 10px;
      grid-auto-flow: column;
      grid-auto-columns: 200px 10px;
    }
</style>