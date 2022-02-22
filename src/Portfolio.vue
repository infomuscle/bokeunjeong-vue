<template>
  <About v-bind:links="links" v-bind:introductions="introductions"></About>
  <Skills></Skills>
  <Resume></Resume>
  <Contact v-bind:contacts="contacts"></Contact>
  <Footer></Footer>
</template>

<script>
import {getContacts, getInroductions, getLinks} from './portfolio.ts'

export default {
  name: "Portfolio",
  props: {},
  data: function () {
    return {
      links: getLinks(),
      introductions: getInroductions(),
      contacts: getContacts()
    }
  }
}
</script>

<style scoped>

</style>