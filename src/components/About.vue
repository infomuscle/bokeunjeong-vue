<template>
  <p>about</p>
  <ul>
    <li v-for="link in links">
      {{ link }}
    </li>
  </ul>
  <ul>
    <li v-for="introduction in introductions">
      {{ introduction }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "About",
  props: {
    links: Object,
    introductions: Object
  }
}
</script>

<style scoped>

</style>