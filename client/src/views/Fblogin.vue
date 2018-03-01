<template>
  <div>
    <p>
      Bonjour {{firstName}}, <br />
      bienvenue sur MTMT <br /> le swipe réinventé
    </p>
    <p>Choisis toi une photo de profil</p>
    <input type="file"><button v-on:click="uploadPicture">Send</button>
  </div>
</template>

<script>
import api from '../api';

export default {
  methods: {
  uploadPicture: function () {
    api
      .upload()
      .then((data) => {
          debugger
          this.$router.push('/lookingfor');
        })
      .catch(err => {
          this.error = err;
        });
    }
  },
  data: function() {
    return {
      photos: '',
      firstName: this.$route.query.firstName
    }
  },
}

</script>


&