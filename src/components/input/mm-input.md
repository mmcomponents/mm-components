```vue
<template>
  <div class="wrapper">
    <mm-input v-model="firstName" label="First Name" />
    <span>Your first name is: {{ firstName }}</span>
  </div>
</template>

<script>
export default {
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
    <mm-input label="First Name" placeholder="Insert your first name" />
  </div>
</template>
```

```vue
<template>
  <div class="wrapper">
    <mm-input
      label="First Name"
      placeholder="Insert your first name"
      :custom-validations="customValidations" />
  </div>
</template>

<script>
export default {
  computed: {
    customValidations() {
      return [{ validate: name => name === 'Marcus', errorMessage: 'You are not Marcus' }];
    }, 
  },
};
</script>
```
