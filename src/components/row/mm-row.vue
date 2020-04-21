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
.mm-row {
  display: flex;
}
</style>
