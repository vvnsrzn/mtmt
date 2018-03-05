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
          <h3>J'ai {{ age }} ans</h3>

        <div class="block container">
          <el-slider v-model="age"
            :min="18"
            :max="50">
          </el-slider>
        </div>

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
      <div class="block container">
        <h3>Si tu devais te décrire en un tweet :</h3>
          <b-field>
            <b-input maxlength="280" 
              v-model="bio"
              type="textarea"
              placeholder="Positive attitude"
              ></b-input>
          </b-field>
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
        age: 24,
        bio: '',
        id: '' // How to get the user id?        
      }
    },
    methods: {
    setLookingFor () {
        api
          .setLookingFor({
            id: '5a9cee10ca528a3995307177',
            gender: this.gender,
            range: this.lookingForAge,
            age: this.age,
            lookingForGender: this.lookingForGender,
            bio: this.bio
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