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
        <span>{{music}}</span>
      </b-radio-button>
      <b-radio-button v-model="answerUserMusic"
        required
          native-value="B"
          type="is-success">
          <span>{{brmusic[0]}}</span>
      </b-radio-button>
      <b-radio-button v-model="answerUserMusic"
        required
          native-value="C"
          type="is-success">
          <span>{{brmusic[1]}}</span>
      </b-radio-button>
      <b-radio-button v-model="answerUserMusic"
        required
          native-value="D"
          type="is-success">
          <span>{{brmusic[2]}}</span>
      </b-radio-button>
     </b-field>

     <p class="question">Quel est son film préféré ?</p>
    <b-field>
      <b-radio-button v-model="answerUserMovie"
        native-value="A"
        type="is-success">
        <span>{{brmovie[0]}}</span>
      </b-radio-button>
      <b-radio-button v-model="answerUserMovie"
          native-value="B"
          type="is-success">
          <span>{{movie}}</span>
      </b-radio-button>
      <b-radio-button v-model="answerUserMovie"
          native-value="C"
          type="is-success">
          <span>{{brmovie[1]}}</span>
      </b-radio-button>
      <b-radio-button v-model="answerUserMovie"
          native-value="D"
          type="is-success">
          <span>{{brmovie[2]}}</span>
      </b-radio-button>
     </b-field>

     <p class="question">Quel est sa qualité principale ?</p>
    <b-field>
      <b-radio-button v-model="answerUserQuality"
        native-value="A"
        type="is-success">
        <span>{{brquality[0]}}</span>
      </b-radio-button>
      <b-radio-button v-model="answerUserQuality"
          native-value="B"
          type="is-success">
          <span>{{brquality[1]}}</span>
      </b-radio-button>
      <b-radio-button v-model="answerUserQuality"
          native-value="C"
          type="is-success">
          <span>{{ quality }}</span>
      </b-radio-button>
      <b-radio-button v-model="answerUserQuality"
          native-value="D"
          type="is-success">
          <span>{{brquality[2]}}</span>
      </b-radio-button>
     </b-field>

     <p class="question">Et son petit défaut ?</p>
    <b-field>
      <b-radio-button v-model="answerUserDefect"
        native-value="A"
        type="is-success">
        <span>{{ defect }}</span>
      </b-radio-button>
      <b-radio-button v-model="answerUserDefect"
          native-value="B"
          type="is-success">
          <span>{{brdefect[0]}}</span>
      </b-radio-button>
      <b-radio-button v-model="answerUserDefect"
          native-value="C"
          type="is-success">
          <span>{{brdefect[1]}}</span>
      </b-radio-button>
      <b-radio-button v-model="answerUserDefect"
          native-value="D"
          type="is-success">
          <span>{{brdefect[2]}}</span>
      </b-radio-button>
     </b-field>
     <div>
        <p>{{ treshold }}% de bonnes réponses requis</p>
        <button 
          @click="hide"
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
    font-size: 14px;
  }
</style>