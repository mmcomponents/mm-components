<template>
  <select
    class="mm-select"
    v-on="listeners" v-bind="$attrs" :multiple="multiple" :value="value">
    <slot></slot>
  </select>
</template>

<script>
export default {
  name: 'mm-select',
  inject: {
    fieldVm: {
      default: null,
    },
  },
  props: {
    customValidations: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [String, Boolean, Number, Object, Array],
      default: null,
    },
    multiple: {
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
@import "./mm-select.scss";
</style>
