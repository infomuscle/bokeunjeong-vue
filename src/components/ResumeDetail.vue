<template>
  <div class="resume-item">
    <h4>{{ project.name }}</h4>
    <h5>{{ project.startAt }} - {{ project.endAt }}</h5>
    <p><em>{{ project.description }}</em></p>
    <ul>
      <li v-for="detail in project.details">{{ detail }}</li>
    </ul>
    <p v-if="project.url != null"><i class="bi bi-chevron-right"></i><a v-bind:href="project.url" target="_blank">{{ project.url }}</a></p>
  </div>
</template>

<script>
export default {
  name: "ResumeDetail",
  props: {
    project: Object
  }
}
</script>

<style scoped>

</style>