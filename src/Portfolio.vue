<template>
  <About v-bind:links="links" v-bind:introductions="introductions"></About>
  <Skills></Skills>
  <Resume></Resume>
  <Contact></Contact>
  <Footer></Footer>
</template>

<script>
import {getInroductions, getLinks} from './portfolio.ts'

export default {
  name: "Portfolio",
  props: {},
  data: function () {
    return {
      links: getLinks(),
      introductions: getInroductions()
    }
  }
}
</script>

<style scoped>

</style>