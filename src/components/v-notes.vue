<template lang="pug">
  .v-notes
    p NOTES

    v-notes-item
    v-notes-item
    v-notes-item
</template>

<script>
import vNotesItem from '@/components/v-notes-item'

export default {
  name: 'v-notes',
  components: {
    vNotesItem
  }
}
</script>


<style>

</style>
