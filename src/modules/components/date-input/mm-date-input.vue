<template>
  <div class="mm-date-input">
    <mm-input
      ref="datepickerInput"
      v-model="value" />
  </div>
</template>

<script>
import {
  addClassToDatepicker,
  createDatepicker,
  destroyDatepicker, updateOption,
} from '../../core/services/datepickerService';
import MmInput from '../input';

export default {
  name: 'mm-date-input',
  components: { MmInput },
  inheritAttrs: false,
  props: {
    onChange: {
      type: Function,
      default: null,
    },
    onClose: {
      type: Function,
      default: null,
    },
    minDate: {
      type: String,
      default: null,
    },
    maxDate: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      datepickerInstance: null,
      value: null,
    };
  },
  mounted() {
    const datepickerOptions = {
      onChange: this.onChange,
      onClose: this.onClose,
      minDate: this.minDate,
      maxDate: this.maxDate,
    };
    this.datepickerInstance = createDatepicker(
      this.$refs.datepickerInput.$el,
      datepickerOptions,
    );
    addClassToDatepicker(this.datepickerInstance, 'mm-datepicker');
  },
  watch: {
    value() {
      this.$emit('input', this.value);
    },
    minDate() {
      updateOption(this.datepickerInstance, {
        optionName: 'minDate',
        value: this.minDate,
      });
    },
    maxDate() {
      updateOption(this.datepickerInstance, {
        optionName: 'maxDate',
        value: this.maxDate,
      });
    },
  },
  beforeDestroy() {
    destroyDatepicker(this.datepickerInstance);
  },
};
</script>

<style scoped>
  @import '~flatpickr/dist/flatpickr.css';
</style>

<style lang="scss">
  @import "./mm-date-input.scss";
</style>
