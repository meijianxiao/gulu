<template>
  <div class="col" :class="colClass" :style="colStyle">
      <slot></slot>
    </div>
</template>
<script>
let validator = (value)=>{
  let keys = Object.keys(value)
  let valid =  true
  keys.forEach(key =>{
    if(!['span','offset'].includes(key)){
      valid = false
    }
  })
  return valid
}
export default {
  name: 'GuluCol',
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    ipad:{
      type:Object,
      validator,
    },
    narrowPc:{
      type:Object,
      validator,
    },
    pc:{
      type:Object,
      validator,
    },
    widePc:{
      type:Object,
      validator,
    }
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colClass(){
      let phoneClass = []
      return [ this.span && `col-${this.span}`,this.offset && `offset-${this.offset}`,
        ...(this.ipad && [`col-ipad-${this.ipad.span}`]),
        ...(this.narrowPc && [`col-narrowPc-${this.narrowPc.span}`]),
        ...(this.pc && [`col-pc-${this.pc.span}`]),
        ...(this.widePc && [`col-widePc-${this.widePc.span}`])]
    },
    colStyle(){
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    }
  }
}

</script>
<style lang="scss" scoped>
.col {

  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $class: offset-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  @media (min-width:577px) {
    $class: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width:769px){
    $class: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width:993px){
    $class: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width:1201px){
    $class: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}

</style>