<template>
  <div class="services">
    <Service
      v-for="item in $serviceItems"
      :key="item.title"
      :title="item.title"
      :description="item.description"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { Service } from "@/components/molecules"

export default defineComponent({
  computed: {
    $serviceItems() {
      return this.$store.getters.$allServices || []
    }
  },
  components: {
    Service
  }
})
</script>

<style lang="scss" scoped>
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
}
</style>
