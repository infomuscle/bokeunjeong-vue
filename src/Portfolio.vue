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
import Typed from "typed.js";

AOS.init({
  duration: 1500,
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
  methods: {
    select(el, all = false) {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    },
  },
  beforeCreate() {
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
    const typed = this.select('.typed')
    if (typed) {
      let typed_strings = typed.getAttribute('data-typed-items')
      typed_strings = typed_strings.split(',')
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }

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
@import "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i";
@import "assets/vendor/aos/aos.css";
@import "assets/vendor/bootstrap/css/bootstrap.min.css";
@import "assets/vendor/bootstrap-icons/bootstrap-icons.css";
@import "assets/vendor/boxicons/css/boxicons.min.css";
@import "assets/css/style.css";
@import "assets/css/style-custom.css";

</style>