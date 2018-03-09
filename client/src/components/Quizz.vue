<template>
  <b-message class="quizz">
    <br />
    <h1 class="title">À ton avis...</h1>
    <p class="question">Quel est son groupe préféré ?</p>
    <form>
    <b-field>
      <b-radio-button v-model="answerUserMusic"
        required
        native-value="A"
        type="is-success">
         <p class="answers">{{music}}</p>
      </b-radio-button>
      <b-radio-button v-model="answerUserMusic"
        required
          native-value="B"
          type="is-success">
           <p class="answers">{{brmusic[0]}}</p>
      </b-radio-button>
      <b-radio-button v-model="answerUserMusic"
        required
          native-value="C"
          type="is-success">
           <p class="answers">{{brmusic[1]}}</p>
      </b-radio-button>
      <b-radio-button v-model="answerUserMusic"
        required
          native-value="D"
          type="is-success">
           <p class="answers">{{brmusic[2]}}</p>
      </b-radio-button>
     </b-field>

     <p class="question">Quel est son film préféré ?</p>
    <b-field>
      <b-radio-button v-model="answerUserMovie"
        native-value="A"
        type="is-success">
         <p class="answers">{{brmovie[0]}}</p>
      </b-radio-button>
      <b-radio-button v-model="answerUserMovie"
          native-value="B"
          type="is-success">
           <p class="answers">{{movie}}</p>
      </b-radio-button>
      <b-radio-button v-model="answerUserMovie"
          native-value="C"
          type="is-success">
           <p class="answers">{{brmovie[1]}}</p>
      </b-radio-button>
      <b-radio-button v-model="answerUserMovie"
          native-value="D"
          type="is-success">
           <p class="answers">{{brmovie[2]}}</p>
      </b-radio-button>
     </b-field>

     <p class="question">Quel est sa qualité principale ?</p>
    <b-field>
      <b-radio-button v-model="answerUserQuality"
        native-value="A"
        type="is-success">
         <p class="answers">{{brquality[0]}}</p>
      </b-radio-button>
      <b-radio-button v-model="answerUserQuality"
          native-value="B"
          type="is-success">
           <p class="answers">{{brquality[1]}}</p>
      </b-radio-button>
      <b-radio-button v-model="answerUserQuality"
          native-value="C"
          type="is-success">
           <p class="answers">{{ quality }}</p>
      </b-radio-button>
      <b-radio-button v-model="answerUserQuality"
          native-value="D"
          type="is-success">
           <p class="answers">{{brquality[2]}}</p>
      </b-radio-button>
     </b-field>

     <p class="question">Et son petit défaut ?</p>
    <b-field>
      <b-radio-button v-model="answerUserDefect"
        native-value="A"
        type="is-success">
         <p class="answers">{{ defect }}</p>
      </b-radio-button>
      <b-radio-button v-model="answerUserDefect"
          native-value="B"
          type="is-success">
          <p class="answers" >{{brdefect[0]}}</p >
      </b-radio-button>
      <b-radio-button v-model="answerUserDefect"
          native-value="C"
          type="is-success">
           <p class="answers">{{brdefect[1]}}</p>
      </b-radio-button>
      <b-radio-button v-model="answerUserDefect"
          native-value="D"
          type="is-success">
           <p class="answers">{{brdefect[2]}}</p>
      </b-radio-button>
     </b-field>
     <div>
         <b class="answers">{{ treshold }}% de bonnes réponses requis</b>
         <br />
        <button 
          @click.prevent="hide"
          class="button is-danger">
          <i class="material-icons">highlight_off</i>Euh... en fait non!
        </button>    
        <button 
          @click.prevent="postQuizz"
          class="button is-primary">
          <i class="material-icons">check</i>Je valide !
        </button>
        
     </div>
    </form>
    
  </b-message>
</template>

<script>
  export default {
    name: "Quizz",
    props: [
      "treshold",
      "music",
      "movie",
      "quality",
      "defect",
      "brmusic",
      "brmovie",
      "brquality",
      "brdefect"
    ],
    data() {
      return {
        answerUserMusic: "",
        answerUserMovie: "",
        answerUserQuality: "",
        answerUserDefect: ""
      };
    },
    methods: {
      hide() {
        this.$emit("hide");
      },
      postQuizz() {
        this.$emit("post", {
          musicAnswer: this.answerUserMusic,
          movieAnswer: this.answerUserMovie,
          qualityAnswer: this.answerUserQuality,
          defectAnswer: this.answerUserDefect
        });
      }
    }
  };
</script>

<style>
  .quizz {
    margin: 0 auto;
    text-align: center;
  }
  .question {
    font-size: 1.6rem
  }
  .answers {
    font-size: 1.4rem;
  }
</style>