<template>
  <div class="mm-radio-group">
    <mm-radio-input
      v-for="(option, index) in options"
      :key="index"
      :option="option"
      :value="localValue"
      @input="onInput"
    />
  </div>
</template>

<script>
import MmRadioInput from '../radio-input/mm-radio-input.vue';

export default {
  name: 'mm-radio-group',
  components: { MmRadioInput },
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
    required: {
      type: Boolean,
      default: true,
    },
    options: {
      required: true,
    },
  },
  computed: {
    inputValidations() {
      const validations = [...this.customValidations];
      if (this.fieldVm && this.fieldVm.isRequired) {
        const requiredValidation = { validate: value => value !== null, errorMessage: 'Este campo é obrigatório.' };
        validations.unshift(requiredValidation);
      }
      return validations;
    },
  },
  watch: {
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
  data() {
    return {
      localValue: null,
    };
  },
  methods: {
    onInput(value) {
      this.localValue = value;
      this.$emit('input', value);
    },
    isValueValid(value) {
      return this.inputValidations
        .every(validationRule => validationRule.validate(value));
    },
    getErrorMessage() {
      try {
        return this.inputValidations[0].errorMessage;
      } catch (e) {
        return null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./mm-radio-group";
</style>
