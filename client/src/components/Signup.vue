<template>
  <div>
    <h1>{{firstName}}</h1>
    <img src="https://lh3.googleusercontent.com/-QRfzdXqbRk0/AAAAAAAAAAI/AAAAAAAARKU/0mVuCX8pVhM/s640/photo.jpg">
    <h2>Age: {{age}} - Gender: {{gender}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  props: {
    firstName: String,
    age: Number,
    gender: String
  }
}
</script>
<style>
  img {
    width: 100px
  }
</style>