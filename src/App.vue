<template>
  <div class="component">
    <HomePage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { HomePage } from "@/components/pages"

export default defineComponent({
  components: {
    HomePage
  }
})
</script>
