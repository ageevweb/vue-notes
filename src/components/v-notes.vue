<template lang="pug">
  .v-notes
    vSearch(
      @search="search = $event"
      :value="search" 
    )
    .v-notes-list
      v-notes-item(
        v-for="(note, index) in NOTES"
        :key="note.date"
        :note="note"
        @removeNote="removeNote(index)"
      )
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import vNotesItem from '@/components/v-notes-item'
import vSearch from '@/components/v-search'


export default {
  name: 'v-notes',

  data () {
    return { 
      search: ''
    }
  },

  components:{
    vNotesItem,
    vSearch,
  },

  methods: {
    ...mapActions([
      'GET_NOTES_FROM_LS',
      'REMOVE_NOTE',
      // 'OPEN_CHANGE_TITLE_INPUT',
    ]),

    removeNote(index) {
      this.REMOVE_NOTE(index)
    },
    // openChangeTitleInput(index) {
    //   this.OPEN_CHANGE_TITLE_INPUT(index);
    // },
    // closeChange(note){
    //   console.log(note)
    // }
  },
  computed: {
    ...mapGetters([
      'NOTES',
      'GRID'
    ]),

    notesFilter(){
      let array = this.NOTES,
          search = this.search

      if (!search) return array
      
      search = search.trim().toLowerCase();

      array = array.filter( function(item){
        if(item.title.toLowerCase().indexOf(search) !== -1){
          return item
        }
      })
      console.log(array)
      return array
    }
  },
  mounted() {
    this.GET_NOTES_FROM_LS();
  },
}
</script>


<style lang="scss">
  .v-notes{
    padding: 40px 0;

    &-list{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

</style>
