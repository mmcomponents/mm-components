<script>
export default {
  name: 'mm-icon',
  functional: true,
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  render(createElement, { props, data }) {
    return createElement('i', {
      class: {
        'mm-icon': true,
        'material-icons': true,
      },
      ...data,
    }, props.icon);
  },
};
</script>

<style lang="scss" scoped>
@import "mm-icon";
</style>
