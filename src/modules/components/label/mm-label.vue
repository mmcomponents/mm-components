<script>
export default {
  name: 'mm-label',
  functional: true,
  render(createElement, { children, data }) {
    return createElement('label', {
      class: {
        'mm-label': true,
      },
      ...data,
    }, children);
  },
};
</script>

<style lang="scss" scoped>
  @import "./mm-label.scss";
</style>
