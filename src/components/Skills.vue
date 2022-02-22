<template>
  <section id="skills" class="skills section-bg">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Skills</h2>
      </div>

      <div class="row skills-content">
        <h3 class="skills-title">Work</h3>
        <div class="col-lg-3" v-for="(skills, type) in work(skills)">
          <h4>{{ type }}</h4>
          <div class="progress" v-for="skill in skills">
            <span class="skill">{{ skill.name }}
            <i class="val p{{skill.proficiency}}" data-bs-toggle="tooltip" data-bs-placement="top"
               v-bind:title="skill.detail">{{ skill.proficiency }}</i>
            </span>
          </div>
        </div>
      </div>
      <div class="row skills-content">
        <h3 class="skills-title">Personal</h3>
        <div class="col-lg-3" v-for="(skills, type) in side(skills)">
          <h4>{{ type }}</h4>
          <div class="progress" v-for="skill in skills">
            <span class="skill">{{ skill.name }}
            <i class="val p{{skill.proficiency}}" data-bs-toggle="tooltip" data-bs-placement="top"
               v-bind:title="skill.detail">{{ skill.proficiency }}</i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  props: {
    skills: Object
  },
  methods: {
    work(skills) {
      return this.groupBy(skills.filter(skill => skill.category == "Work"), "type");
    },
    side(skills) {
      return this.groupBy(skills.filter(skill => skill.category == "Personal"), "type");
    },
    groupBy(data, key) {
      return data.reduce(function (carry, el) {
        var group = el[key];

        if (carry[group] === undefined) {
          carry[group] = []
        }

        carry[group].push(el)
        return carry
      }, {})
    }
  }
}
</script>

<style scoped>

</style>