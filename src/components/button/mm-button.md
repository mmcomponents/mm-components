```vue
<template>
  <div class="wrapper">
    <mm-button @click="onClick()" @blur="onBlur()">
      Click me unelevated
    </mm-button>
    <mm-button theme="outlined" @click="onClick()" @blur="onBlur()">
      Click me Outlined
    </mm-button>
    <mm-button theme="text" @click="onClick()" @blur="onBlur()">
      Click me text
    </mm-button>
    <mm-button disabled @click="onClick()" @blur="onBlur()">
      Disabled
    </mm-button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() { console.log('click'); },
    onBlur() { console.log('blur'); },
  },
}
</script>
```
