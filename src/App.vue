<template lang="pug">
  #app
    h1.app__title VUE.js NoteApp with LocalStorage
    v-new-note
    v-message
    .row
      v-grid
    v-notes
</template>

<script>
import vNewNote from '@/components/v-new-note'
import vMessage from '@/components/v-message'
import vSearch from '@/components/v-search'
import vGrid from '@/components/v-grid'
import vNotes from '@/components/v-notes'

export default {
  name: 'App',
  components: {
    vNewNote,
    vMessage,
    vGrid,
    vNotes
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    max-width: 800px;
    margin: 0 auto;
    padding: 15px;
  .app__title{
    color: #402caf;
    font-size: 30px;
    margin-bottom: 30px;
  }
  .row{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
