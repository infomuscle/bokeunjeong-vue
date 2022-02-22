<template>
  <section id="skills" class="skills section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Skills</h2>
      </div>
      <div class="row skills-content" v-for="(skillsByType, category) in group(skills)">
        <h3 class="skills-title">{{ category }}</h3>
        <div class="col-lg-3" v-for="(skills, type) in skillsByType">
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
    group(skills) {
      let byCategory = this.groupBy(skills, "category");
      let result = {
        "Work": this.groupBy(byCategory["Work"], "type"),
        "Personal": this.groupBy(byCategory["Personal"], "type")
      }
      return result;
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