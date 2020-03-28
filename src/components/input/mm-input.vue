<template>
  <div
    class="mm-input"
    :class="classes">
    <label>
      {{ label }}
    </label>
    <input
      :placeholder="placeholder"
      v-bind="$attrs"
      v-on="listeners">
    <span v-if="errorMessage" class="mm-input__error-message">
      {{ errorMessage }}
    </span>
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
    placeholder: String,
    customValidations: {
      type: Array,
      default: () => [],
    },
  },
  inheritAttrs: false,
  computed: {
    classes() {
      return {
        'mm-input--valid': this.isValid,
        'mm-input--invalid': !this.isValid,
      };
    },
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
        blur: event => this.onBlur(event),
      };
    },
    isValid() {
      return this.customValidations
        .every(validationRule => validationRule.validate(this.$attrs.value));
    },
    errorMessage() {
      if (this.isValid || !this.hasBeenBlurred) {
        return null;
      }
      return this.getErrorMessage();
    },
  },
  data() {
    return {
      hasBeenBlurred: false,
    };
  },
  methods: {
    onBlur() {
      this.hasBeenBlurred = true;
    },
    getErrorMessage() {
      try {
        return this.customValidations[0].errorMessage;
      } catch (e) {
        return null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./mm-input";
</style>
