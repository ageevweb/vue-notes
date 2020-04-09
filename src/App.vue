<template lang="pug">
  #app
    v-new-note
    v-notes
</template>

<script>
import vNewNote from '@/components/v-new-note'
import vNotes from '@/components/v-notes'

export default {
  name: 'App',
  components: {
    vNewNote,
    vNotes
  },
  methods: {

  },
  data(){
    return{}
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
