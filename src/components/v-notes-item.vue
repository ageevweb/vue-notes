<template lang="pug">
  .v-notes-item(:class="note.priority")
    .v-notes-item__header
      p {{ note.title }}
      .note-remove(@click="removeNote(index)") &#10006
    .v-notes-item__body
      .v-notes-item__descr {{ note.descr }}
      .v-notes-item__priority {{ note.priority }}
      .v-notes-item__date {{ note.date }}
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'v-notes-item',
  props:{
    note: {
      type: Object,
      default() {
        return {}
      },
    }
  },
  methods: {
    ...mapActions([
      'REMOVE_NOTE'
    ]),
    removeNote(date) {
      // this.REMOVE_NOTE(date)
      console.log(date)
    }
  }
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

  .change-input{
    position: absolute;
    top: 0px;
    height: 29px;
    width: auto;
    padding: 0 4px;
    color: #402caf;
    border-radius: 7px;
    font-size: 22px;
    border: 2px solid #402caf;
    padding-right: 40px;
    width: 300px;
  }

  .change-input--desc{
    color: #101010;;
    font-size: 20px;
    display: none;
  }

  .change-input--title{
    display: none;
  }
  .change-input--active{
    display: block;
  }
  .cancel-title-change{
    background: transparent;
    border: none;
    position: absolute;
    left: 270px;
    z-index: 50;
    color: #402caf;
    display: none;
    cursor: pointer;
  }

  .cancel-desc-change{
    background: transparent;
    border: none;
    position: absolute;
    left: 270px;
    z-index: 50;
    color: #402caf;
    display: none;
    cursor: pointer;
  }

  @media screen and (max-width:768px) {
    .priority{
      flex-wrap: wrap;
    }
    .priority-title {
    padding-right: 0px;
    width: 100%;
    margin-bottom: 20px;
    }
  }
  @media screen and (max-width:480px) {
    .priority-item {
    margin-right: 0px; 
    width: 100%;
  }
  }
</style>