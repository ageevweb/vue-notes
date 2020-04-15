<template lang="pug">
  .v-change-title
    input(v-bind:value="note.title")
    button(@click="saveChangeTitle")  save
    button(@click="")  cancel
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'v-change-title',
  props: {
    note: {
      type: Object,
      default() {
        return '';
      },
    }
  },
  data () {
    return {
      val: note.title,
    }
  },
  watch: {

  },
  methods: {
    ...mapActions([
      'CLOSE_ALL_CHANGE'
    ]),


      saveChangeTitle(){
        // this.$emit('saveChangeTitle', this.note)
      }
      // this.CLOSE_ALL_CHANGE();
    

  },
  mounted(){
    // document.addEventListener('keydown', function (e) {
    //   if(e.keyCode === 27) {
    //     // 
    //     gg()
    //   }
    // }); 
  }
}
</script>


<style lang="scss">

</style>



<template lang="pug">
  .v-notes-item
    .v-notes-item__header
      .v-notes-item__row
        <svg class="change-icon" enable-background="new 0 0 64 64" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M55.736,13.636l-4.368-4.362c-0.451-0.451-1.044-0.677-1.636-0.677c-0.592,0-1.184,0.225-1.635,0.676l-3.494,3.484   l7.639,7.626l3.494-3.483C56.639,15.998,56.639,14.535,55.736,13.636z"/><polygon points="21.922,35.396 29.562,43.023 50.607,22.017 42.967,14.39  "/><polygon points="20.273,37.028 18.642,46.28 27.913,44.654  "/><path d="M41.393,50.403H12.587V21.597h20.329l5.01-5H10.82c-1.779,0-3.234,1.455-3.234,3.234v32.339   c0,1.779,1.455,3.234,3.234,3.234h32.339c1.779,0,3.234-1.455,3.234-3.234V29.049l-5,4.991V50.403z"/></g></svg>
        
        //- v-change-title(
        //-   v-show="note.changeProcessTitle === true"
        //-   :note="note"
        //- )
        //- p( 
        //-   //- v-show="note.changeProcessTitle === false"
        //-   @click="openChangeTitleInput(index)"
        //- ) 
        p {{ note.title }}
      .note-remove(@click="removeNote(index)") &#10006
    .v-notes-item__body
      .v-notes-item__row
        <svg class="change-icon" enable-background="new 0 0 64 64" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M55.736,13.636l-4.368-4.362c-0.451-0.451-1.044-0.677-1.636-0.677c-0.592,0-1.184,0.225-1.635,0.676l-3.494,3.484   l7.639,7.626l3.494-3.483C56.639,15.998,56.639,14.535,55.736,13.636z"/><polygon points="21.922,35.396 29.562,43.023 50.607,22.017 42.967,14.39  "/><polygon points="20.273,37.028 18.642,46.28 27.913,44.654  "/><path d="M41.393,50.403H12.587V21.597h20.329l5.01-5H10.82c-1.779,0-3.234,1.455-3.234,3.234v32.339   c0,1.779,1.455,3.234,3.234,3.234h32.339c1.779,0,3.234-1.455,3.234-3.234V29.049l-5,4.991V50.403z"/></g></svg>
        .v-notes-item__descr {{ note.descr }}
      .v-notes-item__priority priority: {{ note.priority }}
      .v-notes-item__date {{ note.date }}
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'v-notes-item',

  props: {
    note: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  methods: {
    ...mapActions([
      // 'REMOVE_NOTE',
      // 'OPEN_CHANGE_TITLE_INPUT',
      // 'GET_NOTES_FROM_LS',
    ]),

    // removeNote(index) {
    //   this.REMOVE_NOTE(index)
    // },
    // openChangeTitleInput(index) {
    //   this.OPEN_CHANGE_TITLE_INPUT(index);
    // },
    // closeChange(note){
    //   console.log(note)
    // }
  },
}
</script>

<style lang="scss">

  .v-notes-item{
    width: 49%;
    padding: 18px 20px;
    margin-bottom: 20px;
    background-color: #fff;
    box-shadow: 0 30px 30px rgba(0,0,0, .02);
    transition: all .25s cubic-bezier(.02, .01, .47, 1);
    border-radius: 20px;

    &__row{
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      position: relative
    }

    &__header{
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    color: #402caf;
    }

    &__body{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    &.full{
      width: 100%;
    }

    &:hover{
      box-shadow: 0 30px 30px rgba(0,0,0, .04);
      transform: translate(0, -6px);
      transition-delay: 0s !important; 
    }
  }

  .change-icon{
    height: 30px;
    fill:#494ce8;
    margin-left: 0;
    margin-right: 20px;
  }

  .note-remove{
    cursor: pointer; 
    margin-left: 15px;
  }

  .high{
    background-color: #f77777
  }
  .medium{
    background-color: #f0f79e
  }

  .new-note-row{
    position: relative;
    cursor: pointer;
    margin-bottom: 7px;
  }

  .gridSize{
    width: 100%;
  }

</style>
