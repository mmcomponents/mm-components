<template>
  <button
    :class="buttonClass"
    class="mm-button"
    v-on="listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'mm-button',
  props: {
    /**
     * The color-theme for the button.
     * Valid values are: success, standard, warning or danger,
     */
    colorTheme: {
      type: String,
      default: 'standard',
      validator(colorTheme) {
        return !!colorTheme || ['success', 'standard', 'warning', 'danger'].includes(colorTheme);
      },
    },
    /**
     * The theme for the button.
     * Valid values are: text, outlined or unelevated,
     */
    theme: {
      type: String,
      default: 'unelevated',
      validator(theme) {
        return !!theme || ['text', 'outlined', 'unelevated'].includes(theme);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [`mm-button-theme--${this.theme}`]: true,
        [`mm-button-color--${this.colorTheme}`]: true,
      };
    },
    listeners() {
      return {
        ...this.$listeners,
        click: () => this.onClick(),
        blur: () => this.onBlur(),
      };
    },
  },
  methods: {
    onClick() {
      /**
       * triggered when button receives a click
       * @event click
       * @type Event
       */
      this.$emit('click');
    },
    onBlur() {
      /**
       * triggered when button loses focus
       * @event blur
       * @type Event
       */
      this.$emit('blur');
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "mm-button";
</style>
