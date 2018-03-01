<template>
  <div>
    Wait a moment please
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.query.token)
  }
}

</script>