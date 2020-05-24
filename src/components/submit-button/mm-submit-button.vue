<template>
  <mm-button
    class="mm-submit-button"
    :disabled="disabled"
    type="submit"
    v-bind="$attrs">
    <mm-loader
      v-if="isSubmitting"
      size="small" />
    <slot v-else />
  </mm-button>
</template>

<script>
import MmButton from '../button/mm-button.vue';
import MmLoader from '../loader/mm-loader.vue';

export default {
  name: 'mm-submit-button',
  components: { MmLoader, MmButton },
  inject: ['formVm'],
  computed: {
    disabled() {
      return !this.formVm.status.isValid || this.isSubmitting;
    },
    isSubmitting() {
      return this.formVm.status.isSubmitting;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./mm-submit-button.scss";
</style>
