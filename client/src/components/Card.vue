<template>
<div>
  <div v-if="isQuizzActive">
    <Quizz />
  </div>
  <div class="column flex-container">
    <div class="card swiper p1">
      <header class="card-header">
        <p class="card-header-title">
          {{firstName}}
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="img">
        <img :src="photo" />
      </div>
      <div class="card-content">
        <div class="content">
          <p>
            <i class="material-icons">cake</i> {{ age }} ans</p>
          <p>
            <i class="material-icons">work</i> {{ work }}</p>
          <p>
            <i class="material-icons">keyboard</i>
            <em> {{ bio }} </em>
          </p>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">
          <!-- <i class="material-icons">cancel</i> -->
          <button v-on:click.prevent="dislike" class="button is-black">Dislike</button>        
        </a>
        <a href="#" class="card-footer-item">
          <!-- <i class="material-icons heart">favorite</i> -->
          <button v-on:click.prevent="like" class="button is-primary">Like</button>
        </a>
      </footer>
    </div>
  </div>
</div>
</template>

<script>

import Quizz from '@/components/Quizz.vue'


export default {
  name: 'Card',
  components: {
    Quizz
  },
  data () {
    return {
      isQuizzActive: false    
    }
  },
  props: {
    firstName: String,
    photo: String,
    age: String,
    work: String,
    bio: String,
  },
  methods: {
    like: function () {
      console.log('toto')
      this.isQuizzActive = true
    },

    dislike: function () {
      }
  }
}
</script>

<style>
  
</style>