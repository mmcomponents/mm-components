<template>
  <div>
    <span>{{ option.label }}</span>
    <input type="radio" :checked="checked" @input="onInput">
  </div>
</template>

<script>
export default {
  name: 'mm-radio-input',
  props: {
    value: {
      type: [String, Number, Object, Array],
      default: null,
    },
    option: {
      type: Object,
      required: true,
    },
  },
  watch: {
    checked() {
      if (this.checked) {
        this.$emit('input', this.option.value);
      }
    },
    value() {
      this.checked = this.value === this.option.value;
    },
  },
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    onInput(event) {
      this.checked = event.target.checked;
    },
  },
};
</script>
