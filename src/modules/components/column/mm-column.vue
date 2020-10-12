<script>
export default {
  name: 'mm-col',
  functional: true,
  props: {
    xs: {
      type: [String, Number],
      default: 4,
    },
    sm: {
      type: [String, Number],
      default: 4,
    },
    md: {
      type: [String, Number],
      default: 8,
    },
    lg: {
      type: [String, Number],
      default: 12,
    },
    xl: {
      type: [String, Number],
      default: 12,
    },
    offsetXs: {
      type: [String, Number],
      default: 0,
    },
    offsetSm: {
      type: [String, Number],
      default: 0,
    },
    offsetMd: {
      type: [String, Number],
      default: 0,
    },
    offsetLg: {
      type: [String, Number],
      default: 0,
    },
    offsetXl: {
      type: [String, Number],
      default: 0,
    },
    align: {
      type: String,
      default: null,
      validator(value) {
        return ['center', 'right'].includes(value);
      },
    },
  },
  render(createElement, { props, children, data }) {
    return createElement('div', {
      class: {
        'mm-col': true,
        [`mm-col--xs-${props.xs}`]: props.xs,
        [`mm-col--sm-${props.sm}`]: props.sm,
        [`mm-col--md-${props.md}`]: props.md,
        [`mm-col--lg-${props.lg}`]: props.lg,
        [`mm-col--xl-${props.xl}`]: props.xl,
        [`mm-col--offset-xs-${props.offsetXs}`]: props.offsetXs,
        [`mm-col--offset-sm-${props.offsetSm}`]: props.offsetSm,
        [`mm-col--offset-md-${props.offsetMd}`]: props.offsetMd,
        [`mm-col--offset-lg-${props.offsetLg}`]: props.offsetLg,
        [`mm-col--offset-xl-${props.offsetXl}`]: props.offsetXl,
        [`mm-col--align-${props.align}`]: props.align,
      },
      ...data,
    }, children);
  },
};
</script>

<style lang="scss" scoped>
@import "mm-column";
</style>
