<template>
  <div>
    <form  @submit.prevent="setLookingFor">
      <LookingForGender />
      <LookingForRange />
    <button class="button is-primary">Next</button>      
    </form>
  </div>
</template>

<script>
import api from '../api';
import LookingForGender from '@/components/LookingForGender.vue'
import LookingForRange from '@/components/LookingForRange.vue'
  export default {
    name: 'lookingforrange',
    components: {
      LookingForRange,
      LookingForGender,
    },
    data () {
      return {
        lookingFor: ''        
      }
    },
    methods: {
    setLookingFor (e) {
        console.log();
        console.log(this.lookingfor);
      }
    }

  }
</script>