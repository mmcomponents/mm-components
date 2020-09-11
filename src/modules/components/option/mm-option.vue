<template>
  <option class="mm-option"
    :value="value"
    :selected="selected"
    :disabled="disabled">
    <slot></slot>
  </option>
</template>

<script>
export default {
  name: 'mm-option',
  props: {
    value: {
      type: [String, Boolean, Number, Object, Array],
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        blur: this.onBlur,
      };
    },
    inputValidations() {
      const validations = [...this.customValidations];
      if (this.fieldVm && this.fieldVm.isRequired) {
        const requiredValidation = { validate: (value) => !!value, errorMessage: 'Este campo é obrigatório.' };
        validations.unshift(requiredValidation);
      }
      return validations;
    },
  },
  data() {
    return {
      localValue: this.value || null,
    };
  },
  watch: {
    value() {
      this.localValue = this.value;
    },
    localValue: {
      immediate: true,
      handler() {
        if (this.fieldVm) {
          const isValid = this.isValueValid(this.localValue);
          if (!isValid) {
            this.fieldVm.setErrorMessage(this.getErrorMessage());
          }
          this.fieldVm.setValidation(isValid);
        }
      },
    },
  },
  methods: {
    onInput(event) {
      this.localValue = event.target.value;
      this.$emit('input', event.target.value);
    },
    onBlur() {
      if (this.fieldVm) {
        this.fieldVm.enableFeedbackValidation();
      }
    },
    isValueValid(value) {
      return this.inputValidations
        .every((validationRule) => validationRule.validate(value));
    },
    getErrorMessage() {
      return this.inputValidations[0].errorMessage;
    },
  },
};
</script>

<style scoped>
@import "./mm-option.scss";
</style>
