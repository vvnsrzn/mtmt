<template>
<div class="columns">
  <div class="column is-one-quarter chat">
    Messagerie
  </div>
  <div class="column swiper">
    <Card 
      firstName="Patrick"
      photo="https://lh3.googleusercontent.com/-QRfzdXqbRk0/AAAAAAAAAAI/AAAAAAAARKU/0mVuCX8pVhM/s640/photo.jpg"
      age="29"
      work="Ironhack"
      bio="Pourquoi on dit FBI à l'anglaise et CIA à la française ? Si tu as la réponse, clique sur le coeur. Si tu l'as pas, mais que tu veux m'aider à trouver la réponse clique aussi."
      />
    <Quizz
      msg="Lorem Ipsum"
     />
  </div>  
  
</div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
// import Quizz from '@/components/Quizz.vue'

export default {
  name: 'Swiper',
  components: {
    Card,
    // Quizz
  },
}
</script>
<style>
  .swiper {
    background-color: #eee;
  }

  .card {
    background-color: #fff;
  }

  .img {
    margin: 10px;
    width: 20vw;
    margin: 0 auto
  }

  p {
    font-size: 0.6rem
  }

  .chat {
    background-color: #ccc;
    height: 100vh
  }

</style>