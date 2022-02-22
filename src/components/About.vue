<template>
  <section id="about" class="about">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>About</h2>
        <p>Hello, I'm Bokeun Aaron Jeong</p>
        <p>infomuscle10@gmail.com</p>
      </div>

      <div class="row">
        <div class="col-lg-4">
          <img src="../assets/img/profile-img.jpeg" class="img-fluid" alt="">
          <div class="text-center my-3">
            <a href="resume_bokeunjeong.pdf" download>
              <button id="button-resume">Resume</button>
            </a>
          </div>
        </div>
        <div class="col-lg-8 pt-1 pt-lg-0 content">
          <h3>Web Backend Developer.</h3>
          <p class="fst-italic">
            Responsible for Development of Order and Claim Service to Sync with Partner Companies
          </p>
          <div class="row">
            <div class="col-lg-6" v-for="col in 2">
              <ul>
                <li v-for="link in split(links, col-1)">
                  <i class="bi bi-chevron-right"></i> <strong>{{ link.title }}:</strong>
                  <span><a v-bind:href="link.url" target="_blank">{{ link.url }}</a></span>
                </li>
              </ul>
            </div>
          </div>
          <p></p>
          <p v-for="introduction in introductions">
            <strong>{{ introduction.title }}</strong><br>
            {{ introduction.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  props: {
    links: Object,
    introductions: Object
  },
  methods: {
    split(items, col) {
      return items.filter((item, i) => i % 2 === col)
    }
  }
}
</script>

<style scoped>

</style>