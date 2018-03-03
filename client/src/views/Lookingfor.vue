<template>
  <div>
    <form  @submit.prevent="setLookingFor">
      <section class="container">
          <h3>Je suis un.e</h3>
        <b-field>
            <b-radio-button 
                v-model="gender"
                native-value="male"
                type="is-danger">
                <span>Homme</span>
            </b-radio-button>

            <b-radio-button 
                v-model="gender"
                native-value="female"
                type="is-success">
                <span>Femme</span>
            </b-radio-button>

        </b-field>
          <h3>Je recherche un.e</h3>
        <b-field>
            <b-radio-button 
                v-model="lookingForGender"
                native-value="male"
                type="is-danger">
                <span>Homme</span>
            </b-radio-button>

            <b-radio-button 
                v-model="lookingForGender"
                native-value="female"
                type="is-success">
                <span>Femme</span>
            </b-radio-button>

        </b-field>
      <div class="block container">
      Entre {{ lookingForAge[0] }} et {{ lookingForAge[1] }} printemps
        <el-slider
          v-model="lookingForAge"
          range
          show-stops
          :min="18"
          :max="50">
        </el-slider>
      </div>
    <button class="button is-primary">Next</button>      
      </section>
    </form>
  </div>
</template>

<script>
import api from '../api';
  export default {
    name: 'lookingforrange',
    data () {
      return {
        gender: 'male',
        lookingForAge: [26, 38],
        lookingForGender: 'male',
        range: [26, 38],
        id: '' // How to get the user id?        
      }
    },
    methods: {
    setLookingFor () {
        api
          .setLookingFor({
            id: '5a9aab1bad473d25a962900f',
            gender: this.gender,
            range: this.lookingForAge,
            lookingForGender: this.lookingForGender
          })
          .then((data) => {
          this.$router.push('/quizz-info');
          })
          .catch(err => {
          this.error = err;
        });
      }
    }

  }
</script>