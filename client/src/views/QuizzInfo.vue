<template>
<div class="columns is-vcentered">
  <div class="column">
  <h1 class="title is-3">Quizz info</h1>
  <p>C'est ici que tout se passe.</p>
  <p>Comme tu le sais déjà, la force de cette application réside dans ce quizz.</p>
  <p>C'est pour cela que nous te conseillons de le faire le plus sérieusement possible (ou pas).</p>
  <br />

  <p>Mais pour que tu gardes un contrôle sur la difficulté, nous te proposons que tu inscrives ton seuil de tolérance.</p>
  <br />
  <div class=" container">
    <p>{{ treshold }} %</p>
    <el-slider v-model="treshold"
      :value="50"
      :min="0"
      :max="100">
    </el-slider>
  </div>
  <p class="small">Avec 0% tout le monde pourra rentrer en contact avec toi.</p>
  <p class="small">Avec 100% seul les personnes qui auront répondu correctement à <b>toutes</b> les questions te seront proposées.</p>
  <br />
  <p>Mais vu qu'on est super cool, nous te proposons d'inscrire, à chaque question un indice.</p>
  <p>À toi d'être futé.e</p>
  <br/>
<router-link to="/quizz-music"><button class="button is-primary" @click.prevent="sendTreshold" >Démarrer le Quizz</button></router-link>
</div>
</div>

</template>

<script>
import api from '../api';

  export default {
    data () {
      return {
        treshold: 50
      }
    },
    methods: {
      sendTreshold() {
        api
        .sendTreshold({
          userId: localStorage.getItem('id'),                
          treshold: this.treshold
        })
        .then((treshold) => {
          this.$router.push('/quizz-music');          
        })
        .catch(err => {
          this.error = err
        })
      }
    }
}
</script>

<style scoped>
.small {
  font-size: 12px
}
</style>