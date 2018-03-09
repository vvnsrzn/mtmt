<template>
  <div class="welcome columns is-vcentered">
    <div class="column">
    <p>
      Bonjour {{firstName}},<br />
    </p>
    <br />
    <br />
    <p>Ton inscription s'est bien passée.</p>
    <p>Il faut maintenant que tu choissises une photo de profil</p>
    <br />

    <br />
    <form @submit.prevent="(e) => {uploadPicture(e)}">
    <b-upload v-model="files" v-if="files.length === 0" >
      <a class="button is-danger">
          <i class="material-icons">camera</i>
          <span>Choisir une photo</span>
      </a>
    </b-upload>
        <div v-if="files && files.length">
          <img src="http://mtmt.viviansarazin.com/images/welcome.gif"/>
        </div>
        <button class="button is-primary" v-if="files && files.length">
          <i class="material-icons">check</i>Valider</button>
        </form>
        </div>
  </div>
</template>

<script>
  import api from "../api";

  export default {
    data: function() {
      return {
        error: null,
        files: [],
        photos: "",
        id: this.$route.query.id,
        firstName: this.$route.query.firstName,
        phone: ""
      };
    },
    methods: {
      uploadPicture(e) {
        api
          .uploadPicture({
            _id: this.id,
            photos: this.files[0]
          })
          .then(data => {
            this.$router.push(`/lookingfor/`);
          })
          .catch(err => {
            this.error = err;
          });
      }
    }
  };
</script>

<style scoped>
  .welcome {
    height: 100vh;
    background-image: url("http://mtmt.viviansarazin.com/images/couple.jpeg");
    color: white;
    margin: 0 auto;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    text-align: center;
  }

  img {
    width: 350px;
  }

  .phone {
    width: 10vw;
    text-align: center;
  }

  p {
    font-size: 1.8rem !important;
  }
</style>