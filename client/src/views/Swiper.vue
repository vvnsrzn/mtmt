<template>
  <div class="columns is-vcentered">
    <div class="column is-one-quarter chat">
      <h1 class="title">Contacts</h1>
      <div v-if="!candidates">
        <p>Apparaîtront ici tes matches</p>
        <p>Si tu en trouves du reste...</p>
      </div>
      <div class="media" v-for="(candidate, key) in candidates" :key="key">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="candidate._userCandidate.photos[0]" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{candidate._userCandidate.firstName}}  {{candidate._userCandidate.phone}}</p>
          <p class="subtitle is-6">{{candidate._userCandidate.age}} ans</p>
          
        </div>
      </div>
    </div>
    <div class="column is-one-half">
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
    <div class="box">
      <span v-if="this.counter === 0">
        <h2 class="title">Comment ça marche?</h2>
        <p class="details">Clicque sur "Ouvrir le Quizz" pour tenter ta chance avec {{users[this.counter].firstName}} !</p>
        <img src="https://media.giphy.com/media/ToMjGpKniGqRNLGBrhu/giphy.gif" alt="">
      </span>
      <span v-if="this.counter === 5">
        <h2 class="subtitle">Alors? Tu t'en sors?</h2>
        <img src="https://media.giphy.com/media/Jlt69Ka6SwtH2/giphy.gif" alt="">
      </span>
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
        candidates: {},
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
            if (result.message === "BRAVO") {
              this.getCandidates();
              this.success();
            } else {
              this.danger();
            }
            this.increment();
          })
          .catch(err => {
            this.error = err;
          });
      },

      getCandidates() {
        api
          .getCandidates(localStorage.getItem("id"))
          .then(candidates => {
            console.log(candidates);
            this.candidates = candidates;
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
          type: "is-danger"
        });
      }
    },
    beforeMount() {
      this.getMatches();
      this.getCandidates();
    }
  };
</script>
<style>

  .colunms {
    background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%) !important;
  }

  .details {
    font-size: 1.6rem;
  }

  .img {
    /* margin: 10px; */
    width: 20vw !important;
    margin: 0 auto;
  }

  p {
    font-size: 0.6rem;
  }

  .chat {
    background-color: #f1896f;
    height: 105vh;
  }

  .media {
    margin-left: 2vw
  }
</style>