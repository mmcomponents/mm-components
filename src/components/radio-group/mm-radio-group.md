```vue
<template>
  <div class="wrapper">
    <mm-radio-group :options="options">
    </mm-radio-group>
  </div>
</template>

<script>
import MmRadioGroup from "./mm-radio-group"; 
import MmRadioInput from '../radio-input/mm-radio-input.vue';

export default {
  components: {
    MmRadioGroup,
  },
  data() {
    return {
      value: null,
      options: [
        { label: 'Yes', value: true, },
        { label: 'No', value: false, },
      ],
    };
  },
};
</script>
```
