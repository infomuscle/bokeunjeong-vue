<template>
  <p>about {{ msg }}</p>
</template>

<script>
export default {
  name: "About",
  props: {
    message: String
  },
  data: function () {
    return {msg: this.message + 'test2'};
  }
}
</script>

<style scoped>

</style>