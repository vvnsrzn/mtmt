<template>
  <div class="columns">
    <div class="column is-one-third box">
      <form @submit.prevent="setLookingFor">
        <h1 class="title is-3">Mais qui es-tu ?</h1>
        <br />
        <h3 class="subtitle is-3">Je suis un.e</h3>
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
        <p class="subtitle">J'ai {{ age }} ans</p>
        <div class="">
          <el-slider v-model="age"
            :min="18"
            :max="50">
          </el-slider>
        </div>
        <h3 class="subtitle is-3">Je recherche un.e</h3>
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
        <div class="">
        <p class="subtitle">Entre {{ lookingForRange[0] }} et {{ lookingForRange[1] }} printemps</p>
          <el-slider
            v-model="lookingForRange"
            range
            show-stops
            :min="18"
            :max="50">
          </el-slider>
        </div>
        <div class="">
          <h3 class="subtitle is-3">Si tu devais te décrire en un tweet :</h3>
            <b-field>
              <b-input maxlength="280" 
                v-model="bio"
                type="textarea"
                placeholder="Positive attitude">
              </b-input>
            </b-field>
        </div>
        <button class="button is-primary">Next</button>      
    </form>
  </div>
  </div>
</div>
  
  
  
</template>

<script>
  import api from "../api";
  export default {
    name: "lookingforrange",
    data() {
      return {
        gender: "male",
        lookingForRange: {
          min: 26,
          max: 38
        },
        lookingForGender: "male",
        age: 24,
        bio: "",
        id: ""
      };
    },
    methods: {
      setLookingFor() {
        api
          .setLookingFor({
            id: localStorage.getItem("id"),
            gender: this.gender,
            lookingForRange: {
              min: this.lookingForRange[0],
              max: this.lookingForRange[1]
            },
            age: this.age,
            lookingForGender: this.lookingForGender,
            bio: this.bio
          })
          .then(data => {
            this.$toast.open({
              message: "Bien reçu",
              type: "is-success"
            });
            this.$router.push("/quizz-info");
          })
          .catch(err => {
            this.error = err;
          });
      }
    }
  };
</script>

<style scoped>

 

  .box {
    padding-top: 5vh;
    margin: 0 auto;
    margin-top: 5vh !important;
    background-color: white;
    border-radius: 5px
  }

  .field.has-addons {
    justify-content: center;
    margin: 10px;
  }

  .subtitle {
    margin: 36px;
  }
</style>