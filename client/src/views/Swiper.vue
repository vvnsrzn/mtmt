<template>
<div class="columns">
  <div class="column is-one-quarter chat">
    Messagerie
  </div>
  <div class="column swiper">
    <Card
      :firstName="user.firstName"
      :photo="user.photos[0]"
      :age="user.age"
      :work="user.work"
      :bio="user.bio"
    />
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
      }
    }
  },
  methods: {
    getProfile() {
      api
        .getProfile('5a9e67c1104249234b50f33f')
        .then((user) => {
          console.log(user)
          this.user = user
        })
        .catch(err => {
          this.error = err;
        })
    }
  },
  beforeMount() {
    this.getProfile()
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