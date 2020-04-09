<template lang="pug">
  #app
    v-notes

</template>

<script>
import vNotes from '@/components/v-notes'

export default {
  name: 'App',
  components: {
    vNotes
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
