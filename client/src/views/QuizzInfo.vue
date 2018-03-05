<template>
<div>
<h1>Quizz info</h1>
<p>Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla</p>
<p>Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla</p>
<p>Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla</p>
<p>Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla</p>
        <div class="block container">
          {{ treshold }}
          <el-slider v-model="treshold"
            :value="50"
            :min="0"
            :max="100">
          </el-slider>
        </div>
<router-link to="/quizz-music"><button class="button" @click.prevent="sendTreshold" >Click</button></router-link>
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
        console.log('toto')
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
</style>