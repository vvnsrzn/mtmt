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
          v-model="range"
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
// import LookingForGender from '@/components/LookingForGender.vue'
// import LookingForRange from '@/components/LookingForRange.vue'
  export default {
    name: 'lookingforrange',
    // components: {
    //   LookingForRange,
    //   LookingForGender,
    // },
    data () {
      return {
        lookingForAge: [26, 38],
        lookingForGender: 'male',
        range: [26, 38],        
      }
    },
    methods: {
    setLookingFor () {
        // console.log(this.$emit);
        console.log(this.lookingForGender);
        console.log(this.lookingForAge);
      }
    }

  }
</script>