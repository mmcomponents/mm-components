<template>
  <hr class="mm-divider" :class="classes" />
</template>

<script>
export default {
  name: 'mm-divider',
  props: {
    theme: {
      type: String,
      validator(theme) {
        return ['dotted'].includes(theme);
      },
    },
  },
  computed: {
    classes() {
      return {
        'mm-divider--dotted': this.theme === 'dotted',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "mm-divider";
</style>
