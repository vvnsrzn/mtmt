<template>
<div class="columns is-vcentered">
  <div class="column box is-one-third">
  <h1 class="title is-3">Avant de remplir le Quizz...</h1>
  <p>La force de cette application réside dans les questions qui vont suivre.</p>
  <p>C'est pour cela que nous te conseillons de le faire sérieusement (ou pas).</p>
  <br />
  <p>Mais pour que tu gardes un contrôle sur la difficulté, nous te proposons que tu inscrives ton seuil de tolérance.</p>
  <br />
  <div class="">
    <p>{{ treshold }} %</p>
    <el-slider v-model="treshold"
      :value="50"
      :min="0"
      :max="100">
    </el-slider>
  </div>
  <p class="small-fix">Avec 0% tout le monde pourra rentrer en contact avec toi.</p>
  <p class="small-fix">Avec 100% seul les personnes qui auront répondu correctement à <b>toutes</b> les questions te seront proposées.</p>
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
          this.$toast.open({
              message: "C'est noté",
              type: "is-success"
            });
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

p {
  font-size: 1.8rem !important;
}

.small-fix {
  font-size: 1.3rem !important;
}

.box {
  margin: 0 auto;
  padding: 5vh
}

.columns {
  background-image:url('http://mtmt.viviansarazin.com/images/couple.jpeg');
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
}

.columns {
  height: 105vh
}

</style>