<template>
  <div>
    <p>
      Bonjour {{firstName}} (id: {{id}}), <br />
      bienvenue sur MTMT <br /> le swipe réinventé
    </p>
    <p>Choisis toi une photo de profil</p>
    <form @submit.prevent="(e) => {uploadPicture(e)}">
    <b-upload v-model="files">
            <a class="button is-primary">
                <b-icon icon="upload"></b-icon>
                <span>Click to upload</span>
            </a>
        </b-upload>
        <div v-if="files && files.length">
            <span class="file-name">
                {{ files[0].name }}
            </span>
        </div>
        <button class="button is-primary">Signup</button>
        </form>
  </div>
</template>

<script>
import api from '../api';

export default {
  data: function() {
    return {
      error: null,
      files: [],
      photos: '',
      id: this.$route.query.id,
      firstName: this.$route.query.firstName
    }
  },
  methods: {
  uploadPicture(e) {
    api
      .uploadPicture({
        _id: this.id,
        photos: this.files[0],
      })
      .then((data) => {
          this.$router.push('/lookingfor');
        })
      .catch(err => {
          this.error = err;
        });
    }
  },
}

</script>