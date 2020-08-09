```vue
<template>
  <div class="wrapper">
    <mm-dropdown label="My dropdown">
      <mm-dropdown-option v-for="option in options" :key="option.value" :option="option" />
    </mm-dropdown>
  </div>
</template>

<script>
  export default { 
  data() {
    return {
      options: [
        { value: 'option-1', label: 'Option 1'},
        { value: 'option-2', label: 'Option 2'},
        { value: 'option-3', label: 'Option 3'},
        { value: 'option-4', label: 'Option 4'},
        { value: 'option-5', label: 'Option 5'},
      ],
    };
  },
 };
</script>
```
