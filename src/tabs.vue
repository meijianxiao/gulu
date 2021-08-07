<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name:'GuluTabs',
  props:{
    selected:{
      type:String,
      require:true
    },
    direction:{
      type:String,
      default:'horizontal',
      validator(value){
        return ['horizontal','vertical'].indexOf(value) >=0
      }
    }
  },
  data(){
    return {
      eventBus:new Vue()
    }
  },
  provide(){
    return {
      eventBus:this.eventBus
    }
  },
  created() {
    console.log('爷爷给 爸爸 的')
    console.log(this.eventBus)
  }
}
</script>

<style lang="scss" scoped>
.tabs{

}
</style>