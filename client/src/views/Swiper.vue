<template>
<div class="columns">
  <div class="column is-one-quarter chat">
    Messagerie
  </div>
  <div class="column">
    <Card 
      @like="getQuizz"
      @dislike="increment"
      :firstName="users[this.counter].firstName"
      :photo="users[this.counter].photos[0]"
      :age="users[this.counter].age"
      :work="users[this.counter].work"
      :bio="users[this.counter].bio"      
    />
  </div>
    <div class="column">
    <Quizz
      @hide="isQuizzActive = false"
      v-if="isQuizzActive"
      :music="this.quizz[0].music.answer"
      :movie="this.quizz[0].movie.answer"
      :quality="this.quizz[0].traits.quality.answer"
      :defect="this.quizz[0].traits.defect.answer"
      :brmusic="this.quizz[0].music.badResponses"
      :brmovie="this.quizz[0].movie.badResponses"
      :brquality="this.quizz[0].traits.quality.badResponses"
      :brdefect="this.quizz[0].traits.defect.badResponses"
    />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Card from "@/components/Card.vue";
  import Quizz from "@/components/Quizz.vue";

  import api from "../api";

  export default {
    name: "Swiper",
    props: ["id", "firstName", "photo", "age", "work", "bio", "msg"],
    components: {
      Card,
      Quizz
    },
    data() {
      return {
        music: {
          answer: "",
          badResponses: []
        },
        movie: {
          answer: "",
          badResponses: []
        },
        traits: {
          quality: {
            answer: "",
            badResponses: []
          },
          defect: {
            answer: "",
            badResponses: []
          }
        },
        user: {
          photos: [],
          age: "",
          firstName: "",
          work: "",
          bio: ""
        },
        quizz: {},
        users: {
          photos: [],
          age: 0,
          firstName: "",
          work: "",
          bio: ""
        },
        isQuizzActive: false,
        counter: 0
      };
    },
    methods: {
      yo: function() {
        console.log('yo')
      },
      hideQuizz: function() {
        this.isQuizzActive = false;
      },
      getMatches() {
        api
          .getMatches(localStorage.getItem("id"))
          .then(users => {
            this.users = users;
          })
          .catch(err => {
            this.error = err;
          });
      },
      getQuizz() {
        this.isQuizzActive = true;
        api
          .getQuizz('5aa008ef17ae08328a694e3f')
          .then(quizz => {
            this.quizz = quizz;
          })
          .catch(err => {
            this.error = err;
          });
      },
      increment() {
        this.counter++;
        this.isQuizzActive = false
      }
    },
    beforeMount() {
      this.getMatches();
    }
  };
</script>
<style>
  .img {
    margin: 10px;
    width: 20vw;
    margin: 0 auto;
  }

  p {
    font-size: 0.6rem;
  }

  .chat {
    background-color: #ccc;
    height: 100vh;
  }
</style>