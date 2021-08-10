<template>
  <div class="popover"  @click.stop="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
         :class="{[`position-${position}`]:true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
          <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'GuluPopover',
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    if (this.trigger === 'hover') {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  destroyed() {
    if (this.trigger === 'hover') {
      this.$refs.popover.removeEventListener('mouseenter', this.open)
      this.$refs.popover.removeEventListener('mouseleave', this.close)
    }
  },
  computed: {
    openEvent() {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseenter'
      }
    },
    closeEvent() {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseleave'
      }
    }
  },
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0;
      }
    }
  },
  methods: {
    positionContent() {
      const {contentWrapper, triggerWrapper} = this.$refs
      document.body.appendChild(contentWrapper)
      const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
      const {height: height2} = contentWrapper.getBoundingClientRect()
      let positions = {
        top: {
          left: left + window.screenX,
          top: top + window.screenY,
        },
        bottom: {
          left: left + window.screenX,
          top: top + height + window.screenY,
        },
        left: {
          left: left + window.screenX,
          top: top + window.screenY + (height - height2) / 2,
        },
        right: {
          left: left + window.screenX + width,
          top: top + window.screenY + (height - height2) / 2,
        },
      }
      contentWrapper.style.left = positions[this.position].left + 'px'
      contentWrapper.style.top = positions[this.position].top + 'px'
    },
    listenToDocument() {
      document.addEventListener('click', this.onClickDocument)
    },
    onClickDocument(e) {
      if (!(this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target)))) {
        this.close()
      }
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        this.listenToDocument()
      })
    },
    onClick(event) {
      if (this.$refs.triggerWrapper && this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;


}

.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;

  &::before, &::after {
    content: '';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }

  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;

    &::before, &::after {
      left: 10px;
    }

    &::before {
      border-bottom:none;
      border-top-color: black;
      top: 100%;

    }

    &::after {
      border-bottom:none;
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }

  &.position-bottom {
    margin-top: 10px;

    &::before, &::after {
      left: 10px;
    }

    &::before {
      border-top:none;
      border-bottom-color: black;
      bottom: 100%;

    }

    &::after {
      border-top:none;
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;

    &::before, &::after {
      transform: translateY(-50%);
      top: 50%
    }

    &::before {
      border-right:none;
      border-left-color: black;
      left: 100%;
    }

    &::after {
      border-right:none;

      border-left-color: white;
      left: calc(100% - 1px)
    }
  }

  &.position-right {
    margin-left: 10px;

    &::before, &::after {
      transform: translateY(-50%);
      top: 50%
    }

    &::before {
      border-left:none;
      border-right-color: black;
      right: 100%;
    }

    &::after {
      border-left:none;
      border-right-color: white;
      right: calc(100% - 1px)
    }
  }
}
</style>