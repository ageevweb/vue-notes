<template lang="pug">
  .v-search
    input.v-search__input(
      type="text" 
      v-model="search"
      v-on:input=""
    )
    .v-search__icon
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'v-search',
  data () {
    return {
      search: '',
    }
  },
  computed: {
    ...mapGetters([
      'NOTES',
    ]),
    notesFilter(){
      // let array = NOTES,
          search = this.search
      if (!search) return array
      search = search.trim().toLowerCase();
      array = array.filter( function(item){
        if(item.title.toLowerCase().indexOf(search) !== -1){
          return item
        }
      })
      return array
    }
  },
  watch: {
    search(val){
      console.log(val)
    }
  }
}
</script>


<style lang="scss">

  .v-search{
    position: relative;
    &__input {
      padding: 16px 16px 16px 56px !important;
      margin-bottom: 0px;
      border-radius: 30px;
      color: #2c3e50;
      font-size: 16px;
      min-width: 400px;
      height: auto;
    }
    &__icon{
      position: absolute;
      top: 12px;
      left: 15px;
    }
  }
</style>