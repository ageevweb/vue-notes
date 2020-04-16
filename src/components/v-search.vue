<template lang="pug">
  .v-search
    input.v-search__input(
      type="text" 
      v-model="search"
      :placeholder="placeholder"
    )
    .v-search__icon
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'v-search',

  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
  },

  data () {
    return { search: this.value }
  },
  
  watch: {
    search (val) {
      console.log(val)
      this.$emit('search', val);
    }
  }
}
</script>


<style lang="scss">

  .v-search{
    position: relative;
    margin-bottom: 30px;

    &__input {
      padding: 16px 16px 16px 56px !important;
      margin-bottom: 0px;
      border-radius: 30px;
      color: #2c3e50;
      font-size: 16px;
      height: auto;
    }
    
    &__icon{
      position: absolute;
      top: 12px;
      left: 15px;
    }
  }
</style>