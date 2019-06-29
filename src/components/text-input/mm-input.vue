<template>
  <div>
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-on="listeners">
    </label>
    <span>{{ errorMessage }}</span>
  </div>
</template>

<script>
export default {
  name: 'mm-input',
  props: {
    label: {
      type: String,
      required: true,
    },
    errorMessage: {
      type: String,
      default: null,
    },
  },
  inheritAttrs: false,
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "mm-input";
</style>
