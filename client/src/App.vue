<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Dosis");
  @import url("http://fonts.googleapis.com/icon?family=Material+Icons");

  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";
  // Set your colors
  $primary: #f1896f;
  $primary-invert: findColorInvert($primary);
  $twitter: #4099ff;
  $twitter-invert: findColorInvert($twitter);
  $danger: #3A1772;
  $success: #F2CD5D;
  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
  );
  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;
  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";

  #app {
    font-family: "Dosis", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  p {
    font-size: 2rem;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
