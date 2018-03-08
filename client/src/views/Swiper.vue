<template>
<div class="columns">
  <div class="column is-one-quarter chat">
    Messagerie
  </div>
  <div class="column swiper">
    <Card @next="increment"
      :firstName="users[this.counter].firstName"
      :photo="users[this.counter].photos[0]"
      :age="users[this.counter].age"
      :work="users[this.counter].work"
      :bio="users[this.counter].bio"
    />
  <button class="button" @click.prevent="getMatches" >TEST</button>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import api from '../api'

export default {
  name: 'Swiper',
  props: ['id', 'firstName', 'photo', 'age', 'work', 'bio', 'msg'],
  components: {
    Card,
  },
  data () {
    return {
      user: {
        photos: [],
        age: '',
        firstName: '',
        work: '',
        bio: '',
      },
      quizz: {

      },
      users: {
        photos: [],
        age: '',
        firstName: '',
        work: '',
        bio: ''
      },
      counter: 0
    }
  },
  methods: {
    getMatches() {
      api
        .getMatches(localStorage.getItem("id"))
        .then((users) => {
          this.users = users
        })
        .catch(err => {
          this.error = err;
        })
    },
    getQuizz() {
      api
      .getQuizz(id)
      .then((quizz) => {
        this.quizz = quizz
      })
      .catch(err => {
        this.error = err;
      })
    },
    increment(){
      this.counter++;
    }
  },
  beforeMount() {
    this.getMatches()
  },
}
</script>
<style>

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