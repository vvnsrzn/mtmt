<template>
  <div>
    <p>Vous souhaitez rencontrer</p>
    <p>Hommes | Femmes</p>
      <LookingForRange />
  </div>
</template>

<script>
import LookingForRange from '@/components/LookingForRange.vue'
  export default {
    name: 'lookingforrange',
    components: {
      LookingForRange
    }
  }
</script>