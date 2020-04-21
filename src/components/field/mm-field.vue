<template>
  <div class="mm-field" :class="classes">
    <label>{{ label }}</label>
    <slot></slot>
    <span v-if="showInvalidFeedback" class="mm-field__error-message">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'mm-field',
  props: {
    label: {
      type: String,
      required: true,
    },
    required: Boolean,
  },
  provide() {
    return {
      setErrorMessage: this.setErrorMessage,
      setValidation: this.setValidation,
      enableFeedbackValidation: this.enableFeedbackValidation,
      isRequired: this.required,
    };
  },
  data() {
    return {
      errorMessage: null,
      isValid: true,
      isValidationFeedbackEnabled: false,
    };
  },
  computed: {
    showInvalidFeedback() {
      return this.isValidationFeedbackEnabled && !this.isValid;
    },
    classes() {
      return {
        'mm-field--invalid': this.showInvalidFeedback,
        'mm-field--required': this.required,
      };
    },
  },
  methods: {
    setErrorMessage(message) {
      this.errorMessage = message;
    },
    setValidation(isValid) {
      this.isValid = isValid;
    },
    enableFeedbackValidation() {
      this.isValidationFeedbackEnabled = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "mm-field.scss";
</style>
