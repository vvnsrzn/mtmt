<template>
<div class="columns">
  <div class="column is-one-quarter">
    First
  </div>
  <div class="column flex-container">
        <div class="card swiper p1">
          <header class="card-header">
            <p class="card-header-title">
              Vivian
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="img">
            <img src="data:image/jpeg;base64,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">
          </div>
          <div class="card-content">
            <div class="content">
              <p>
                <i class="material-icons">cake</i> 29 ans</p>
              <p>
                <i class="material-icons">work</i> Ironhack</p>
              <p>
                <i class="material-icons">keyboard</i>
                <em> Pourquoi on dit FBI à l'anglaise et CIA à la française ? Si tu as la réponse, clique sur le coeur. Si tu
                  l'as pas, mais que tu veux m'aider à trouver la réponse clique aussi.</em>
              </p>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">
              <i class="material-icons">cancel</i>
            </a>
            <a href="#" class="card-footer-item">
              <i class="material-icons heart">favorite</i>
            </a>
          </footer>
        </div>
  </div>
</div>
</template>

<script>
    export default {

    }  
</script>

<style>
  .swiper {
    width: 20vw
  }

  p {
    font-size: 0.6rem
  }
  
  .flex-container {
    height: 100%;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>