<template>
  <div>
    <form  @submit.prevent="setLookingFor">
      <section class="container">
        <b-field>
            <b-radio-button 
                v-model="lookingForGender"
                native-value="male"
                type="is-danger">
                <span>Hommes</span>
            </b-radio-button>

            <b-radio-button 
                v-model="lookingForGender"
                native-value="female"
                type="is-success">
                <span>Femmes</span>
            </b-radio-button>

        </b-field>
        <p class="content">
            <b>Selection:</b>
            {{ lookingForGender }}
        </p>
      </section>
      <div class="block container">
      {{ lookingForAge }}
        <el-slider
          v-model="lookingForAge"
          range
          show-stops
          :min="18"
          :max="50">
        </el-slider>
      </div>
    <button class="button is-primary">Next</button>      
    </form>
  </div>
</template>

<script>
import api from '../api';
  export default {
    name: 'lookingforrange',
    data () {
      return {
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
            id: '5a990ebea0552c1dfd2a13e4',
            range: this.lookingForAge,
            gender: this.lookingForGender
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