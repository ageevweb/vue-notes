<template lang="pug">
  .v-new-note
    label Title
    input(
      v-model="note.title" 
      type="text"
    )

    .priority
      label(class="priority-title") Priority
      .priority-item
        input(
          id="r1" 
          value="normal" 
          type="radio" 
          v-model="note.priority"
        )
        label(for="r1") Normal

      .priority-item
        input(
          id="r2" 
          value="medium" 
          type="radio" 
          v-model="note.priority"
        )
        label(for="r2") Medium
  
      .priority-item
        input(
          id="r3" 
          value="high" 
          type="radio" 
          v-model="note.priority"
        )
        label(for="r3") High

    label Description
    textarea(v-model="note.descr")
    button.btn.btnPrimary(@click="addNote") add
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'v-new-note',
  data() {
    return {
      note: {
        title: '',
        descr: '',
        priority: 'normal'
      }
    }
  },
  methods: {
    ...mapActions([
      'ADD_NEW_NOTE',
    ]),

    addNote() {
      let {title, descr, priority} = this.note;

      if(title === '' && descr === ''){
        // this.message = "please, fill all inputs";
        return false;
      }
      else if(title === ''){
        // this.message = "title can't be blank";
        return false;
      }
      else if (descr === ''){
        // this.message = "description can't be blank";
        return false;
      }

      let newNote = {
        title,
        descr,
        date: new Date(Date.now()).toLocaleString(),
        priority
      }
      console.log(newNote)
      
      this.ADD_NEW_NOTE(newNote)
      
      
      this.note.title = this.note.descr = '';
      this.note.priority = 'normal';
      // this.message = null;
  },


  },
  
}
</script>


<style>

</style>