<template>
<div class="columns">
  <div class="column is-one-quarter chat">
    Messagerie
  </div>
  <div class="column">
    <div>
      <!-- <div v-if="result === 'BRAVO'">
        <button class="button is-medium is-success">
          Tu es trop fort.e pour être réel !
        </button>
      </div>
      <div v-else-if="result === 'NOPE'">
        <button class="button is-medium is-danger" @click="danger">
          T'es nul.le
        </button>
      </div> -->
    </div>

    <Card 
      @like="getQuizz"
      v-if="users.length"
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
      @post="postQuizz"
      v-if="isQuizzActive"
      :music="this.quizz[0].music.answer"
      :movie="this.quizz[0].movie.answer"
      :quality="this.quizz[0].traits.quality.answer"
      :defect="this.quizz[0].traits.defect.answer"
      :brmusic="this.quizz[0].music.badResponses"
      :brmovie="this.quizz[0].movie.badResponses"
      :brquality="this.quizz[0].traits.quality.badResponses"
      :brdefect="this.quizz[0].traits.defect.badResponses"
      :treshold="this.quizz[0].treshold"
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
        users: [],
        isQuizzActive: false,
        counter: 0,
        result: ""
      };
    },
    methods: {
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
        api
          .getQuizz(this.users[this.counter]._id)
          .then(quizz => {
            this.quizz = quizz;
            this.isQuizzActive = true;
          })
          .catch(err => {
            this.error = err;
          });
      },
      postQuizz(e) {
        api
          .postQuizz({
            _id: this.quizz[0]._id,
            _userRequester: localStorage.getItem("id"),
            _userCandidate: this.users[this.counter]._id,
            ...e
          })
          .then(result => {
            this.result = result.message;
            if(result.message === 'BRAVO') {
              this.success();
            }
            else {
              this.danger();
            }
            this.increment();
          })
          .catch(err => {
            this.error = err;
          });
      },
      increment() {
        this.counter++;
        this.isQuizzActive = false;
      },

      success() {
        this.$toast.open({
          message: "Bravo! Quizz réussi :)",
          type: "is-success"
        });
      },

      danger() {
        this.$toast.open({
          duration: 5000,
          message: `Dommage... Essaye encore !`,
          position: "is-bottom",
          type: "is-danger"
        });
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