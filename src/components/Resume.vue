<template>
  <section id="resume" class="resume">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Resume</h2>
        <!--            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>-->
      </div>

      <div class="row">
        <div class="col-lg-6">
          <h3 class="resume-title">Career & Education</h3>
          <div class="resume-item">
            <h4>SSG.COM</h4>
            <h5>Mar 2019 - Present</h5>
            <ul>
              <li>Order/Claim/Affliation Backend Development</li>
            </ul>
          </div>
          <div class="resume-item pb-0">
            <h4>Sungkyunkwan University</h4>
            <h5>Mar 2010 - Aug 2018</h5>
            <ul>
              <li>Majored in Economics</li>
              <li>Doubled Majored in Easern Philosophy</li>
              <li>4-year Full Tuition Scholarship</li>
            </ul>
          </div>

          <h3 class="resume-title">Side Projects</h3>
          <ResumeDetail v-bind:project="project" v-for="project in projects.sides"></ResumeDetail>
        </div>
        <div class="col-lg-6">
          <h3 class="resume-title">Professional Experience</h3>
          <ResumeDetail v-bind:project="project" v-for="project in projects.works"></ResumeDetail>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Resume",
  props: {
    projects: Object,
  },
}
</script>

<style scoped>

</style>