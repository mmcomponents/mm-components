<template>
  <button
    class="mm-button"
    v-bind="$attrs"
    v-on="listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'mm-button',
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        click: () => this.$emit('click'),
        blur: () => this.$emit('blur'),
        hover: () => this.$emit('hover'),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "mm-button";
</style>
