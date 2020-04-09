<template lang="pug">
  .v-notes
    p NOTES
    v-notes-item(
      v-for="(note, index) in NOTES"
      :key="index"
      :note="note"
    )
</template>

<script>
import vNotesItem from '@/components/v-notes-item'
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'v-notes',
  data() {
    return {

    }
  },
  components: {
    vNotesItem
  },
  methods: {
    ...mapActions([
      'GET_NOTES_FROM_LS',
    ])
  },
  computed: {
    ...mapGetters([
      'NOTES',
    ]),
  },
  mounted() {
    this.GET_NOTES_FROM_LS();
  },
}
</script>


<style>

</style>
