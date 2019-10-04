<template>
  <div class="input-field">
    <label :for="name">
      {{ label }}
    </label>
    <label>
      <input
        :name="name"
        :id="name"
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
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    errorMessage: {
      type: String,
      default: null,
    },
    enableValidation: {
      type: Boolean,
      default: true,
    },
    validatorFunction: {
      type: Function,
      default: null,
    },
  },
  inheritAttrs: false,
  mounted() {
    console.log(this.$listeners);
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.onInput(event),
      };
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "mm-input";
</style>
