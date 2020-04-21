```vue
<template>
  <div class="wrapper">
    <mm-field label="First Name">
      <mm-input v-model="firstName" />
    </mm-field>
    <span>Your first name is: {{ firstName }}</span>
  </div>
</template>

<script>
import MmField from '../field/mm-field.vue';

export default { 
components: { MmField } ,
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
    <mm-field label="First Name">
      <mm-input placeholder="Insert your first name" />
    </mm-field>
  </div>
</template>
<script>
import MmField from "../field/mm-field.vue"; 

export default { 
components: { MmField }
 }
</script>
```

```vue
<template>
  <div class="wrapper">
    <mm-field label="First Name">
      <mm-input
        v-model="firstName"
        placeholder="Insert your first name"
        :custom-validations="customValidations" />
    </mm-field>
  </div>
</template>

<script>
import MmField from "../field/mm-field.vue"; 

export default { 
  components: { MmField } ,
  computed: {
    customValidations() {
      return [{ validate: name => name === 'Marcus', errorMessage: 'You are not Marcus' }];
    }, 
  },
  data() {
    return { firstName: 'Arthur', };
  },
};
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
import MmField from "../field/mm-field.vue"; 

export default { 
  components: { MmField } ,
};
</script>
```
