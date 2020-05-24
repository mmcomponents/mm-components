<script>
export default {
  name: 'mm-row',
  functional: true,
  render(createElement, { children, data }) {
    return createElement('div', {
      class: 'mm-row',
      ...data,
    }, children);
  },
};
</script>

<style scoped>
@import "./mm-row.scss";
</style>
