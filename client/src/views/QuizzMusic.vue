<template>
<div class="container">
  <img src="https://lh3.googleusercontent.com/D_04_AQH-II9TyLU26GDtFxPZohYWbl-SGKb1msbi5XlIGMAEr0HI01RvZ7Afi5BzQ=w300">
  <h2>Quel est ton groupe préféré ?</h2>
  <p>{{ search }}</p>
  <b-field>
    <b-input 
        placeholder="Search..."
        v-model="search"
        type="search"
        icon="magnify">
    </b-input>
  </b-field>
</div>
</template>

<script>
  export default {
    data () {
      return {
        search: ""
      }
    }
}
</script>

<style scoped>
  img {
    width: 50px
  }
</style>