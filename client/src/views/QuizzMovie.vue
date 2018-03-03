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
              <!-- <img v-if="movie.images[0]" v-bind:src=movie.images[0].url alt="Placeholder image"> -->
              <!-- <img v-else src="https://placehold.it/600x600" alt="Placeholder image"> -->
            </figure>
            <!-- <a v-bind:href=movie.external_urls.spotify> -->
            <!-- <button class="button">Écouter</button> -->
            </a>
          </div>
          <button class="button is-primary" @click.prevent="sendmovie(movie.name)">{{ movie.name }} </button>
        </div>
        </div>
      </div>
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
          this.movies = movies.body.movies.items
        })
        .catch(err => {
          this.error = err;
        });
      },

      sendMovie(movie) {
        api
        .sendMrtist({
          _id: '5a9531b39f3afa648038ab5d',
          artist: artist,
          hint: this.hint
        })
        .then((data) => {
          this.$router.push('/quizz-movie');
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