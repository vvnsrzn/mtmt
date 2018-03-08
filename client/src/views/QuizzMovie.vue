<template>
<div class="main">
  <div class="columns">
    <div class="column box is-one-third">    
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQje1pC1ZrC8L5RAztL1pZp8HYhkavmj_HmTITHLJ3EzUwAhqRT">
      <h2 class="title is-3">Quel est ton film préféré ?</h2>
      <form>
        <div class="has-text-centered">
          <b-field>
              <b-input placeholder="Search..." v-model="search" rounded type="search" icon="magnify">
              </b-input>
              <button v-show="movies" class="button hidden" @click.prevent="getMovie">Submit</button>
          </b-field>
          <b-field>
              <b-input placeholder="Un indice peut être ?" rounded v-model="hint" type="text">
              </b-input>
          </b-field>
        </div>
      </form>
    </div>
  </div>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="(movie, key) in movies" :key="key">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img v-if="movie.poster_path" v-bind:src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt="Placeholder image">
              <img v-else src="https://placehold.it/600x600" alt="Placeholder image">
            </figure>
          </div>
          <button class="button is-primary" @click.prevent="sendMovie(movie.title)">{{ movie.title }} </button>
        </div>
      </div>
    </div>
  </div>  
</div>    
</template>


<script>
  import api from "../api";

  export default {
    data() {
      return {
        search: "",
        hint: "",
        movies: [],
        movie: ""
      };
    },
    methods: {
      getMovie() {
        api
          .getMovie(this.search)
          .then(movies => {
            (this.movies = movies.results), console.log(this.movies);
          })
          .catch(err => {
            this.error = err;
          });
      },

      sendMovie(movie) {
        api
          .sendMovie({
            userId: localStorage.getItem("id"),
            movie: movie,
            hint: this.hint
          })
          .then(data => {
            this.$toast.open({
              message: `All right!`,
              type: "is-success"
            });
            this.$router.push("/quizz-traits");
          })
          .catch(err => {
            this.error = err;
          });
      }
    }
  };
</script>

<style scoped>
  img {
    margin-top: 12px;
    width: 90px;
  }
  .box {
    margin: 0 auto;
    margin-top: 5vh
  }
  .main {
    background-image: url("http://mtmt.viviansarazin.com/images/couple.jpeg");
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    height: 400vh;
  }
</style>