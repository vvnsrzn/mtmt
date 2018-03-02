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
    <div>
      
      <ul>
        <li v-for="artist in artists">
          <!-- {{ artist. name }} -->
           <button class="button" @click.prevent="sendArtist" >{{ artist.name }} </button>
        </li>  
      </ul>

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
      }
    },
    methods: {
      getMusic() {
        api.getMusic(this.search)
        .then((artists) => {
          this.artists = artists.body.artists.items
          console.log(this.artists)
        })
        .catch(err => {
          this.error = err;
        });
      },
      sendArtist() {
        console.log(this.artist)
      }
    }
}
</script>

<style scoped>
  img {
    width: 50px
  }
</style>