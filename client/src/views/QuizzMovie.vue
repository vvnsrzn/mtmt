<template>
<div>
    <div class="container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQje1pC1ZrC8L5RAztL1pZp8HYhkavmj_HmTITHLJ3EzUwAhqRT">
        <h2>Quel est ton film préféré ?</h2>
        <form>
          <div class="box has-text-centered">
            <b-field>
                <b-input placeholder="Search..." v-model="search" type="search" icon="magnify">
                </b-input>
                <button class="button hidden" @click.prevent="getMovie">Submit</button>
            </b-field>
            <b-field>
                <b-input placeholder="Un indice peut être ?" v-model="hint" type="text">
                </b-input>
            </b-field>
          </div>
        </form>
    </div>
    <div class="container">
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="movie in movies">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img v-if="movie.poster_path" v-bind:src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt="Placeholder image">
              <img v-else src="https://placehold.it/600x600" alt="Placeholder image">
            </figure>
            </a>
          </div>
          <button class="button is-primary" @click.prevent="sendmovie(movie.title)">{{ movie.title }} </button>
        </div>
        </div>
      </div>
      <pre>{{movies}}</pre>
      </div>  
    </div>  
</div>    
</template>


<script>
import api from '../api';

  export default {
    data () {
      return {
        search: "",
        hint: "",
        movies: [],
        movie: "",
      }
    },
    methods: {
      getMovie() {
        api
        .getMovie(this.search)
        .then((movies) => {
          this.movies = movies.results,
          console.log(this.movies)
        })
        .catch(err => {
          this.error = err;
        });
      },

      sendMovie(movie) {
        api
        .sendMovie({
          _id: '5a9531b39f3afa648038ab5d',
          movie: movie,
          hint: this.hint
        })
        .then((data) => {
          console.log('tutu')
          // this.$router.push('/quizz-movie');
          })
          .catch(err => {
          this.error = err;
        });
      }
    }
}
</script>

<style scoped>
  img {
    width: 50px
  },
  box {
    margin: 0 auto
  }
</style>