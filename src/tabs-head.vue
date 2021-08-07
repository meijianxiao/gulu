<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name:'GuluTabsHead',
  inject:['eventBus'],
  created() {
    console.log('爷爷给 head 的')
    console.log(this.eventBus)
  }
}
</script>

<style lang="scss" scoped>
.tabs-head{

}
</style>