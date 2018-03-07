<template>
<div class="columns">
  <div class="column is-one-quarter chat">
    Messagerie
  </div>
  <div class="column swiper">
    <Card
      :firstName="users[0].firstName"
      :photo="users[0].photos[0]"
      :age="users[0].age"
      :work="users[0].work"
      :bio="users[0].bio"
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
        bio: ''
      },
      users: {
        photos: [],
        age: '',
        firstName: '',
        work: '',
        bio: ''
      }
    }
  },
  methods: {
    // getProfile() {
    //   api
    //     .getProfile('5a9eeae9015a4265213c2be6')
    //     .then((user) => {
    //       this.user = user
    //     })
    //     .catch(err => {
    //       this.error = err;
    //     })
    // },
    getMatches() {
      api
        .getMatches(localStorage.getItem("id"))
        .then((users) => {
          this.users = users
        })
        .catch(err => {
          this.error = err;
        })
    }
  },
  beforeMount() {
    this.getMatches()
    // this.getProfile()
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