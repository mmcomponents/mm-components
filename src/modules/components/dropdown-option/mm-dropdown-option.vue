<template>
  <div class="mm-dropdown-option">
    <mm-divider v-if="option.withDistinction"/>
    <button @click="onSelect()">
      {{ option.label }}
    </button>
  </div>
</template>

<script>
import MmDivider from '../divider/mm-divider.vue';

export default {
  name: 'mm-dropdown-option',
  components: { MmDivider },
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  inject: ['selectOption', 'closeOptions'],
  methods: {
    onSelect() {
      this.selectOption(this.option);
      this.closeOptions();
    },
  },
};
</script>

<style scoped lang="scss">
  @import "./mm-dropdown-option.scss";
</style>
