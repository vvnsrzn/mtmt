<template>

    <div class="card swiper p1">
      <header class="card-header">
        <p class="firstName">
           {{firstName}}
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="image is-1by1">
        <img :src="photo" class="top"/>
      </div>
      <div class="card-content">
        <div class="content">
            <i class="material-icons">cake</i><p class="details"> {{ age }} ans</p>
            <i class="material-icons">work</i><p class="details"> {{ work }} </p>
            <i class="material-icons">keyboard</i><p class="details"> {{ bio }} </p>
          </p>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">
          <button 
            v-on:click.prevent="dislike"
            class="button is-danger">
            <i class="material-icons">rowing</i>
            Prochain.e</button>        
        </a>
        <a href="#" class="card-footer-item">
          <button 
            v-on:click.prevent="like" 
            class="button is-primary">
            <i class="material-icons">open_in_new</i>
            Ouvrir le Quizz</button>
        </a>
      </footer>

</div>
</template>

<script>
  export default {
    name: "Card",
    data() {
      return {};
    },
    props: {
      firstName: String,
      photo: String,
      age: Number,
      work: String,
      bio: String
    },
    methods: {
      like: function() {
        this.$emit("like");
      },
      dislike: function() {
        this.$emit("dislike");
      }
    }
  };
</script>

<style scoped>
  .firstName {
    font-size: 4rem;
    padding-left: 10px
  }

  .details {
    font-size: 1.6rem;
  }
  .box {
    margin: 0 auto;
    margin-right: 5vw
  }
  .swiper {
    width: 45vh;
    margin: 0 auto
  }

</style>