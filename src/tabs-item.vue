<template>
  <div class="tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'GuluTabsItem',
  inject:['eventBus'],
  props:{
    name:{
      type:[String,Number],
      required:true
    },
    disabled:{
      type:Boolean,
      default:false
    }

  },
  created() {
    console.log('爷爷给 item 的')
    console.log(this.eventBus)
    this.eventBus.$on('update:selected',(name)=>{
      console.log(name)
    })
  },
  methods:{
    xxx(){
      this.eventBus.$emit('update:selected',this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-item{

}
</style>