<template>
<div>
<div class="container">
  <img src="https://lh3.googleusercontent.com/D_04_AQH-II9TyLU26GDtFxPZohYWbl-SGKb1msbi5XlIGMAEr0HI01RvZ7Afi5BzQ=w300">
  <h2>Quel est ton groupe préféré ?</h2>
  <form>
  <b-field>
    <b-input 
        placeholder="Search..."
        v-model="search"
        type="search"
        icon="magnify">
    </b-input>
  </b-field>
  <button class="button" @click.prevent="getMusic">Submit</button>
  </form>
</div>
<div>
  <pre>{{ data }}</pre>
</div>  
</div>  
</template>

<script>
import api from '../api';

  export default {
    data () {
      return {
        search: "",
        data: ""
      }
    },
    methods: {
      getMusic() {
        api.getMusic(this.search)
        .then((data) => {
          // console.log(data.body.artists.items)
          this.data = data.body.artists.items
          console.log(this.data)
          
          // this.$router.push('/about');
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