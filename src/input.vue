<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" :disabled="disabled" :readonly="readonly"
           @change="$emit('change',$event.target.value)"
           @input="$emit('input',$event.target.value)"
           @focus="$emit('focus',$event.target.value)"
           @blur="$emit('blur',$event.target.value)"
           type="text">
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'
  export default {
    components:{Icon},
    name:'GuluInput',
    props:{
      value:{
        type:String
      },
      disabled:{
        type:Boolean,
        default:false
      },
      readonly:{
        type:Boolean,
        default: false
      },
      error:{
        type:String
      }
    }
  }
</script>
<style lang="scss" scoped>
$border-radius:4px;
$border-color:#999;
$height:32px;
$border-color-hover: #666;
$font-size:14px;
$box-shadow-color:rgba(0,0,0,0.5);
$red:#F1453D;
.wrapper{
  //--button-height: 32px;
  //--font-size: 14px;
  //--button-bg: white;
  //--button-active-bg: #eee;
  //--border-radius: 4px;
  //--border-color: #999;
  //--border-color-hover: #666;
  //--color: #333;
  display: inline-flex;
  align-items: center;
  font-size: $font-size;
  > :not(:last-child){margin-right: .5em}

  &.error{
    > input{
      border-color: $red;
    }
  }
  > input{
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover{
      border-color: $border-color-hover;
    }
    &:focus{
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],&[readonly]{
      border-color:#ccc;
      color:#ccc;
      cursor: not-allowed;
    }
  }
  .icon-error{
    fill: $red;
  }
  .errorMessage{
   color:$red;
  }
}

</style>