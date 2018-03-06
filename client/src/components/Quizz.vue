<template>
  <b-message class="quizz">
    <button class="button block" @click="hide">Annuler</button>    
    <h1 class="is-title">À ton avis...</h1>
    <p>Quel est son groupe préféré ?</p>
    <form>
    <b-field>
      <b-radio-button v-model="radioButtonMusic"
        native-value="A"
        type="is-danger">
        <span>A</span>
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

     <p>Quel est son film préféré ?</p>
    <b-field>
      <b-radio-button v-model="radioButtonMovie"
        native-value="A"
        type="is-danger">
        <span>A</span>
      </b-radio-button>
      <b-radio-button v-model="radioButtonMovie"
          native-value="B"
          type="is-success">
          <span>B</span>
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

     <p>Quel est sa qualité principale ?</p>
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
          <span>C</span>
      </b-radio-button>
      <b-radio-button v-model="radioButtonQuality"
          native-value="D"
          type="is-success">
          <span>D</span>
      </b-radio-button>
     </b-field>

     <p>Et son petit défaut ?</p>
    <b-field>
      <b-radio-button v-model="radioButtonDefect"
        native-value="A"
        type="is-danger">
        <span>A</span>
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
     <button class="button is-primary">Je valide !</button>
    </form>
    
  </b-message>
</template>

<script>
  export default {
    name: 'Quizz',
    data() {
      return {
        isQuizzActive: false,
        radioButtonMusic: '',
        radioButtonMovie: '',
        radioButtonQuality: '',
        radioButtonDefect: '',
        }
      },
    props: {
      isQuizzActive: Boolean,    
      msg: String
    },
    methods: {
        hide() {
        this.$emit('hide')
      }
    }
  }
</script>

<style>
  .quizz {
    margin: 0 auto;
    width: 20vw;
    text-align: center
  }
</style>