<template>
  <Masthead></Masthead>
  <About v-bind:links="links" v-bind:introductions="introductions"></About>
  <Skills v-bind:skills="skills"></Skills>
  <Resume v-bind:projects="projects"></Resume>
  <Contact v-bind:contacts="contacts"></Contact>
  <Footer></Footer>
</template>

<script>
import {getContacts, getInroductions, getLinks, getProjects, getSkills} from './portfolio.ts'

export default {
  name: "Portfolio",
  props: {},
  data: function () {
    return {
      links: getLinks(),
      introductions: getInroductions(),
      projects: getProjects(),
      contacts: getContacts(),
      skills: getSkills()
    }
  },
  mounted() {
    import('./assets/js/main').then(() => {
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      });
    });
  }
}
</script>

<style scoped>

</style>