<template>
  <div>
    <p>Bienvenue sur MTMT</p>
    <p>Merci de vous connecter via Facebook</p>
      <a href="http:///api/auth/facebook">
      Continuer avec Facebook</a>
  </div>
</template>

<script>

/// API!!!

import api from '../api';
import Signup from '@/components/Signup.vue'

export default {
  data () {
    return {
      error: null,
    };
  },
    methods: {
      signup() {
        api
        .signup(
        )
        .then((data) => {
          this.$router.push('/about');
        })
        .catch(err => {
          this.error = err;
        });
      }
    },

  name: 'signup',
  components: {
    Signup
  }
}
  
</script>