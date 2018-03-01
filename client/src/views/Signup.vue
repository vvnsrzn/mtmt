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
      // facebookId: '',
      // firstName: '',
      error: null,
    };
  },
    methods: {
      signup() {
        api
        .signup(
          // facebookId: this.facebookId,
          // firstName: this.firstName
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