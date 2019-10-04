<template>
  <div id="app">
    <h1>Components</h1>
    <h6>Text Input</h6>
    <div>
      <mm-input name="name" label="Name" v-model="name" />
    </div>
  </div>
</template>

<script>
import MmInput from './components/text-input/mm-input.vue';

export default {
  name: 'app',
  components: {
    MmInput,
  },
  data() {
    return {
      name: 'Meu nome é...',
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
