<template>
  <div class="mm-popover" v-on-click-outside="closePopover">
    <div class="mm-popover__reference" @click="onReferenceClick()">
      <slot name="reference"></slot>
    </div>
    <div
      v-show="showPopover"
      class="mm-popover__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import {
  createPopover,
  destroyPopover,
} from '../../core/services/popoverService';
import onClickOutside from '../../directives/on-click-outside';

export default {
  name: 'mm-popover',
  props: {
    placement: {
      type: String,
      default: 'bottom-start',
    },
    openOnReferenceClick: {
      type: Boolean,
      default: true,
    },
  },
  directives: {
    onClickOutside,
  },
  mounted() {
    const reference = this.$el.querySelector('.mm-popover__reference');
    const content = this.$el.querySelector('.mm-popover__content');
    this.popoverInstance = createPopover(
      reference,
      content,
      {
        placement: this.placement,
      },
    );
  },
  data() {
    return {
      showPopover: false,
      popoverInstance: null,
    };
  },
  methods: {
    onReferenceClick() {
      if (this.openOnReferenceClick) {
        this.openPopover();
      }
    },
    openPopover() {
      this.showPopover = true;
    },
    closePopover() {
      this.showPopover = false;
    },
  },
  beforeDestroy() {
    destroyPopover(this.popoverInstance);
  },
};
</script>

<style scoped lang="scss">
  @import "./mm-popover.scss";
</style>
