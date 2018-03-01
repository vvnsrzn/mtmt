<template>
  <div>
    <h1>{{firstName}}</h1>
    <img src="https://lh3.googleusercontent.com/-QRfzdXqbRk0/AAAAAAAAAAI/AAAAAAAARKU/0mVuCX8pVhM/s640/photo.jpg">
    
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    lookingFor: Number,
    range: Array 
  }
}
</script>
<style>
  
</style>