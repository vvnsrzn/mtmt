<template>
  <div class="block">
    <el-slider
      v-model="value9"
      range
      show-stops
      :max="100">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value9: [26, 38]
      }
    },
    name: 'LookingForRange'
  }
</script>