<template>
  <div class="component">
    <HomeTemplate />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { HomeTemplate } from "@/components/templates"

export default defineComponent({
  components: {
    HomeTemplate
  },
  created() {
    const serviceItems = [
      {
        title: "Front End",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis voluptatem laudantium quos consectetur est perspiciatis nam optio inventore asperiores laborum dolore accusamus corrupti voluptatibus ipsum nemo, incidunt, accusantium rem quasi!"
      },
      {
        title: "Back End",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis voluptatem laudantium quos consectetur est perspiciatis nam optio inventore asperiores laborum dolore accusamus corrupti voluptatibus ipsum nemo, incidunt, accusantium rem quasi!"
      },
      {
        title: "Manutenção",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis voluptatem laudantium quos consectetur est perspiciatis nam optio inventore asperiores laborum dolore accusamus corrupti voluptatibus ipsum nemo, incidunt, accusantium rem quasi!"
      }
    ]

    this.$store.dispatch("fetchServices", serviceItems)
  }
})
</script>
