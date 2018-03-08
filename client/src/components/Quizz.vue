<template>
  <b-message class="quizz">
    <button class="button is-pulled-right" @click="hide"><i class="material-icons">highlight_off</i></button>    
    <br />
    <h1 class="title">À ton avis...</h1>
    <p class="question">Quel est son groupe préféré ?</p>
    <form>
    <b-field>
      <b-radio-button v-model="radioButtonMusic"
        native-value="A"
        type="is-danger">
        <span>{{music}}</span>
      </b-radio-button>
      <b-radio-button v-model="radioButtonMusic"
          native-value="B"
          type="is-success">
          <span>B</span>
      </b-radio-button>
      <b-radio-button v-model="radioButtonMusic"
          native-value="C"
          type="is-danger">
          <span>C</span>
      </b-radio-button>
      <b-radio-button v-model="radioButtonMusic"
          native-value="D"
          type="is-success">
          <span>D</span>
      </b-radio-button>
     </b-field>

     <p class="question">Quel est son film préféré ?</p>
    <b-field>
      <b-radio-button v-model="radioButtonMovie"
        native-value="A"
        type="is-danger">
        <span>A</span>
      </b-radio-button>
      <b-radio-button v-model="radioButtonMovie"
          native-value="B"
          type="is-success">
          <span>{{movie}}</span>
      </b-radio-button>
      <b-radio-button v-model="radioButtonMovie"
          native-value="C"
          type="is-danger">
          <span>C</span>
      </b-radio-button>
      <b-radio-button v-model="radioButtonMovie"
          native-value="D"
          type="is-success">
          <span>D</span>
      </b-radio-button>
     </b-field>

     <p class="question">Quel est sa qualité principale ?</p>
    <b-field>
      <b-radio-button v-model="radioButtonQuality"
        native-value="A"
        type="is-danger">
        <span>A</span>
      </b-radio-button>
      <b-radio-button v-model="radioButtonQuality"
          native-value="B"
          type="is-success">
          <span>B</span>
      </b-radio-button>
      <b-radio-button v-model="radioButtonQuality"
          native-value="C"
          type="is-danger">
          <span>{{ quality }}</span>
      </b-radio-button>
      <b-radio-button v-model="radioButtonQuality"
          native-value="D"
          type="is-success">
          <span>D</span>
      </b-radio-button>
     </b-field>

     <p class="question">Et son petit défaut ?</p>
    <b-field>
      <b-radio-button v-model="radioButtonDefect"
        native-value="A"
        type="is-danger">
        <span>{{ defect }}</span>
      </b-radio-button>
      <b-radio-button v-model="radioButtonDefect"
          native-value="B"
          type="is-success">
          <span>B</span>
      </b-radio-button>
      <b-radio-button v-model="radioButtonDefect"
          native-value="C"
          type="is-danger">
          <span>C</span>
      </b-radio-button>
      <b-radio-button v-model="radioButtonDefect"
          native-value="D"
          type="is-success">
          <span>D</span>
      </b-radio-button>
     </b-field>
     <div>
      <button class="button is-primary">Je valide !</button>
     </div>
    </form>
    
  </b-message>
</template>

<script>
  export default {
    name: "Quizz",
    props: ["music", "movie", "quality", "defect"],
    data() {
      return {
        radioButtonMusic: "",
        radioButtonMovie: "",
        radioButtonQuality: "",
        radioButtonDefect: ""
      };
    },
    methods: {
      hide() {
        this.$emit("hide");
      },
    }
  };
</script>

<style>
  .quizz {
    margin: 0 auto;
    /* width: 20vw; */
    text-align: center;
  }
  .question {
    font-size: 14px;
  }
</style>