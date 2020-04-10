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
      'SET_MESSAGE'
    ]),

    addNote() {
      let {title, descr, priority} = this.note;

      if(title === '' && descr === ''){
        this.SET_MESSAGE('please, fill all inputs!')
        return false;
      }
      else if(title === ''){
        this.SET_MESSAGE("title can't be blank!")
        return false;
      }
      else if (descr === ''){
        this.SET_MESSAGE("description can't be blank!")
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
      this.SET_MESSAGE(null)

  },


  },
  
}
</script>


<style lang="scss">
  .v-new-note{
    button{
      margin: 30px auto;
      display: block
    }
  }
  input[type="radio"]{
    display: none
  }

  .priority{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .priority-title{
    padding-right: 50px;
  }
  .priority-item{
    margin-right: 50px;
    padding-left: 20px;

    &:last-child{
      margin-right: 0;
    }

    label{
      position: relative;
      cursor: pointer;
      &:before{
        content: '';
        width: 24px;
        height: 24px;
        position: absolute;
        background-color: #fff;
        left: -30px;
        border-radius: 50%;
        border: 2px solid #494ce8;
      }
    }
  }
  input[type="radio"]:checked+label{
    &:after{
      content: '';
      position: absolute;
      left: -23px;
      top: 7px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color:  #494ce8;
    }
  }
</style>