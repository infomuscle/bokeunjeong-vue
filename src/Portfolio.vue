<template>
  <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
  <!-- ======= Header ======= -->
  <header id="header" class="d-flex flex-column justify-content-center">
    <nav id="navbar" class="navbar nav-menu">
      <ul>
        <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
        <li><a href="#skills" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Skills</span></a></li>
        <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
        <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
      </ul>
    </nav><!-- .nav-menu -->
  </header><!-- End Header -->

  <Masthead></Masthead>
  <main id="main">
    <About v-bind:links="links" v-bind:introductions="introductions"></About>
    <Skills v-bind:skills="skills"></Skills>
    <Resume v-bind:projects="projects"></Resume>
    <Contact v-bind:contacts="contacts"></Contact>
  </main>
  <Footer></Footer>

  <!--  <div id="preloader"></div>-->
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

</template>


<script>
import {getContacts, getInroductions, getLinks, getProjects, getSkills} from './main.ts';
import AOS from "aos";

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

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
  beforeCreate() {
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {

    import('./assets/js/main').finally(() => {
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    });
  },
  beforeUpdate() {
  },
  updated() {
  }
}

</script>

<style>
@import "assets/vendor/aos/aos.css";
</style>