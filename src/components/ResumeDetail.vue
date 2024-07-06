<template>
  <div class="resume-item">
    <h4>{{ project.name }}</h4>
    <h5 v-if="project.startAt != null && project.endAt != null">{{ project.startAt }} - {{ project.endAt }}</h5>
    <p><em>{{ project.description }}</em></p>
    <ul>
      <li v-for="detail in project.details">{{ detail }}</li>
    </ul>
    <p v-if="project.urls != null" v-for="url in project.urls"><i class="bi bi-chevron-right"></i><a v-bind:href="url" target="_blank">{{ url }}</a></p>
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