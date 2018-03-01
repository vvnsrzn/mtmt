<template>
  <div>
    <p>Welcome</p>
      <a href="http://localhost:3000/api/auth/facebook">
      Signup with Facebook</a>
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
          debugger
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