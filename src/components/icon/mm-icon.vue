<template>
  <i class="mm-icon material-icons">{{icon}}</i>
</template>

<script>
export default {
  name: 'mm-icon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "mm-icon";
</style>
