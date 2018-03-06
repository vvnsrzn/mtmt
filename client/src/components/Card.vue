<template>
<div class="columns">
  <div class="column">
    <div class="card swiper p1">
      <header class="card-header">
        <p class="title">
          {{firstName}}
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="box image is-128x128">
        <img :src="photo" class="top"/>
      </div>
      <div class="card-content">
        <div class="content">
            <i class="material-icons">cake</i><p class="details"> {{ age }} ans</p>
            <i class="material-icons">work</i><p class="details"> {{ work }} </p>
            <i class="material-icons">keyboard</i><p class="details"> {{ bio }} </p>
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
    <div class="" v-if="isQuizzActive">
    <Quizz @hide="hideQuizz" />
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
    // isQuizzActive: Boolean
  },
  methods: {
    like: function () {
      this.isQuizzActive = true
    },

    hideQuizz: function () {
      this.isQuizzActive = false
    },

    dislike: function () {
      console.log('tutu')      
    },
  }
}
</script>

<style scoped>
  .details {
    font-size: 14px
  }
  .box {
    margin: 0 auto
  }
  .swiper {
    width: 50vh
  }
</style>