<template>
  <div class="home-template">
    <Container class="home-template">
      <Header />
      <Presentation />
      <Services />
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { Container } from "@/components/bosons"
import { Header, Presentation, Services } from "@/components/organisms"

export default defineComponent({
  components: {
    Container,
    Header,
    Presentation,
    Services
  }
})
</script>

<style lang="scss" scoped>
.home-template {
  margin: 1rem auto;
  display: grid;
  grid-gap: 5rem;
}
</style>
