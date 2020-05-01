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
        [`mm-col--offset-xs-${props.xs}`]: props.offsetXs,
        [`mm-col--offset-sm-${props.sm}`]: props.offsetSm,
        [`mm-col--offset-md-${props.md}`]: props.offsetMd,
        [`mm-col--offset-lg-${props.lg}`]: props.offsetLg,
        [`mm-col--offset-xl-${props.xl}`]: props.offsetXl,
      },
      ...data,
    }, children);
  },
};
</script>

<style lang="scss" scoped>
@import "mm-column";
</style>
