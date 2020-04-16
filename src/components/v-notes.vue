<template lang="pug">
  .v-notes
    vSearch(
      @search="search = $event"
      :value="search" 
      placeholder="find your note..." 

    )
    .v-notes-list
      v-notes-item(
        v-for="(note, index) in notesFilter"
        :key="note.date"
        :note="note"
        @removeNote="removeNote(index)"
        @activeTitleEdit="activeTitleEdit(index)"
        @activeDescEdit="activeDescEdit(index)"
        :idx="index"
        @closeChange="closeChange"
        @saveNoteTitle="saveNoteTitle"
        @saveNoteDesc="saveNoteDesc"
      )
    .empty-list(v-if="!NOTES.length")
      p There are no notes yet. You can add them...
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
      'ACTIVE_TITLE_EDIT',
      'ACTIVE_DESC_EDIT',
      'SAVE_NOTE_TITLE',
      'SAVE_NOTE_DESC',
      'CLOSE_CHANGE'
    ]),

    removeNote(index) {
      this.REMOVE_NOTE(index)
    },

    saveNoteTitle(newVal, idx){
      this.SAVE_NOTE_TITLE( {newVal, idx} )
    },

    saveNoteDesc(newValDesc, idx){
      this.SAVE_NOTE_DESC( {newValDesc, idx} )
    },

    activeTitleEdit(index) {
      this.ACTIVE_TITLE_EDIT(index);
    },

    activeDescEdit(index) {
      this.ACTIVE_DESC_EDIT(index);
    },

    closeChange(){
      this.CLOSE_CHANGE()
    }
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

    window.addEventListener('keyup', e => {
      if(e.keyCode === 27){
        this.CLOSE_CHANGE()
      }
    })
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
