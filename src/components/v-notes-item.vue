<template lang="pug">
  .v-notes-item
    p {{ note.title }}
    p {{ note.descr }}
    p {{ note.date }}
</template>

<script>

export default {
  name: 'v-notes-item',
  props:{
    note: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>


<style>

</style>