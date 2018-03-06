<template>
  <b-message class="quizz">
    <h1 class="is-title">Quizz</h1>
    <p>Quel est son groupe préféré ?</p>
    <form>
    <b-field>
      <b-radio-button v-model="radioButton"
        native-value="A"
        type="is-danger">
        <span>A</span>
      </b-radio-button>
      <b-radio-button v-model="radioButton"
          native-value="B"
          type="is-success">
          <span>B</span>
      </b-radio-button>
      <b-radio-button v-model="radioButton"
          native-value="C"
          type="is-danger">
          <span>C</span>
      </b-radio-button>
      <b-radio-button v-model="radioButton"
          native-value="D"
          type="is-success">
          <span>D</span>
      </b-radio-button>
     </b-field>

     <p>Quel est son film préféré ?</p>
    <b-field>
      <b-radio-button v-model="radioButton"
        native-value="A"
        type="is-danger">
        <span>A</span>
      </b-radio-button>
      <b-radio-button v-model="radioButton"
          native-value="B"
          type="is-success">
          <span>B</span>
      </b-radio-button>
      <b-radio-button v-model="radioButton"
          native-value="C"
          type="is-danger">
          <span>C</span>
      </b-radio-button>
      <b-radio-button v-model="radioButton"
          native-value="D"
          type="is-success">
          <span>D</span>
      </b-radio-button>
     </b-field>

     <p>Quel est sa qualité principale ?</p>
    <b-field>
      <b-radio-button v-model="radioButton"
        native-value="A"
        type="is-danger">
        <span>A</span>
      </b-radio-button>
      <b-radio-button v-model="radioButton"
          native-value="B"
          type="is-success">
          <span>B</span>
      </b-radio-button>
      <b-radio-button v-model="radioButton"
          native-value="C"
          type="is-danger">
          <span>C</span>
      </b-radio-button>
      <b-radio-button v-model="radioButton"
          native-value="D"
          type="is-success">
          <span>D</span>
      </b-radio-button>
     </b-field>

     <p>Et son petit défaut ?</p>
    <b-field>
      <b-radio-button v-model="radioButton"
        native-value="A"
        type="is-danger">
        <span>A</span>
      </b-radio-button>
      <b-radio-button v-model="radioButton"
          native-value="B"
          type="is-success">
          <span>B</span>
      </b-radio-button>
      <b-radio-button v-model="radioButton"
          native-value="C"
          type="is-danger">
          <span>C</span>
      </b-radio-button>
      <b-radio-button v-model="radioButton"
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
        radioButton: '',
        }
      },
    props: {
      msg: String
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