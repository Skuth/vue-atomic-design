<template>
  <div class="social-networks">
    <SocialLink
      v-for="link in socialLinks"
      :key="link.name"
      :icon="link.icon"
      :name="link.name"
      :to="link.to"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { SocialLink } from "@/components/atoms"

export default defineComponent({
  data() {
    return {
      socialLinks: [
        {
          icon: "facebook.svg",
          name: "facebook",
          to: "https://facebook.com"
        },
        {
          icon: "github.svg",
          name: "github",
          to: "https://github.com"
        },
        {
          icon: "twitter.svg",
          name: "twitter",
          to: "https://twitter.com"
        }
      ]
    }
  },
  components: {
    SocialLink
  }
})
</script>

<style lang="scss" scoped>
.social-networks {
  display: grid;
  grid-gap: 1rem;
}
</style>
