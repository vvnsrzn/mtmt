<template>
  <div>
    <p>
      Bonjour {{firstName}}, <br />
      bienvenue sur MTMT <br /> le swipe réinventé
    </p>
    <p>Choisis toi une photo de profil</p>
    <input type="file"><button type="submit" @ >Send</button>
  </div>
</template>

<script>
import api from '../api';

export default {
  data: function() {
    return {
      photos: '',
      firstName: this.$route.query.firstName
    }
  },
  uploadPicture() {
    api
      .upload()
      .then((data) => {
          debugger
          this.$router.push('/about');
        })
      .catch(err => {
          this.error = err;
        });
  }
}

</script>


