```vue
<template>
  <div class="wrapper">
    <mm-field label="First Name">
      <mm-input v-model="firstName" />
    </mm-field>
  </div>
</template>

<script>
import MmInput from '../input/mm-input.vue';

export default { 
components: { MmInput } ,
  data() {
    return {
      firstName: '',
    };
  },
}
</script>
```

```vue
<template>
  <div class="wrapper">
    <mm-field label="First Name" required>
      <mm-input
        placeholder="Insert your first name" />
    </mm-field>
  </div>
</template>

<script>
import MmInput from "../input/mm-input.vue"; 

export default { 
  components: { MmInput } ,
};
</script>
```
