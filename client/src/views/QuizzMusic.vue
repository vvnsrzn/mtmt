<template>
<div>
    <div class="container">
        <img src="https://lh3.googleusercontent.com/D_04_AQH-II9TyLU26GDtFxPZohYWbl-SGKb1msbi5XlIGMAEr0HI01RvZ7Afi5BzQ=w300">
        <h2>Quel est ton groupe préféré ?</h2>
        <form>
            <b-field>
                <b-input placeholder="Search..." v-model="search" type="search" icon="magnify">
                </b-input>
                <button class="button" @click.prevent="getMusic">Submit</button>
            </b-field>
        </form>
    </div>
    <div class="container">
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="artist in artists">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img v-if="artist.images[0]" v-bind:src=artist.images[0].url alt="Placeholder image">
              <img v-else src="https://placehold.it/600x600" alt="Placeholder image">
            </figure>
            <a v-bind:href=artist.external_urls.spotify>
            <button class="button">Écouter</button>
            </a>
          </div>
          <button class="button is-primary" @click.prevent="sendArtist(artist.name)">{{ artist.name }} </button>
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
        artists: [],
        artist: "",
      }
    },
    methods: {
      getMusic() {
        api
        .getMusic(this.search)
        .then((artists) => {
          this.artists = artists.body.artists.items
        })
        .catch(err => {
          this.error = err;
        });
      },


      sendArtist(message) {
        console.log(message)
        api
        .sendArtist({
          id: '5a990ebea0552c1dfd2a13e4',
          artist: this.artist
        })
        .then((data) => {
          // this.$router.push('/quizz-info');
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
  }
</style>