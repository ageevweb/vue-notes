<template lang="pug">
  .v-message
    p {{ MESSAGE }}
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-message',
  methods: {
    ...mapActions([
      'SET_MESSAGE'
    ])
  },
  mounted() {
    this.SET_MESSAGE(null);
  },
    computed: {
    ...mapGetters([
      'MESSAGE',
    ]),
  },
}
</script>


<style>
  .v-message{
    color: red;
    font-size: 20px;
  }
</style>