<template lang="pug">
  .v-grid
    .v-grif__icons
      <svg :class="{ active: GRID }" @click="switchGrid(true)"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
      <svg :class="{ active: !GRID }" @click="switchGrid(false)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'GRID',
    ]),
  },
  methods: {
    ...mapActions([
      'SWITCH_GRID'
    ]),
    switchGrid(a) {
      this.SWITCH_GRID(a)
    }
  }
}
</script>

<style lang="scss">
  svg{
    margin-left: 15px;
    color: lightgray;
    cursor: pointer;

    &.active{
      color: #494ce8;
    }
  }
</style>
