```vue
<template>
  <div class="wrapper">
    <mm-button @click="onClick()" @blur="onBlur()">
      Click me unelevated
    </mm-button>
    <mm-button disabled @click="onClick()" @blur="onBlur()">
      Click me unelevated disabled
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

```vue
<template>
  <div class="wrapper">
    <mm-button theme="text">
      Text button
    </mm-button>
    <mm-button theme="text" disabled>
      Text disabled
    </mm-button>
  </div>
</template>
```

```vue
<template>
  <div class="wrapper">
    <mm-button theme="outlined">
      Outlined button
    </mm-button>
    <mm-button theme="outlined" disabled>
      Outlined disabled
    </mm-button>
  </div>
</template>
```

```vue
<template>
  <div class="wrapper">
    <mm-button theme="outlined" color-theme="success">
      Outlined success button
    </mm-button>
    <mm-button theme="outlined" color-theme="success" disabled>
      Outlined success disabled
    </mm-button>
    <br>
    <mm-button theme="outlined" color-theme="warning">
      Outlined warning button
    </mm-button>
    <mm-button theme="outlined" color-theme="warning" disabled>
      Outlined warning disabled
    </mm-button>
    <br>
    <mm-button theme="outlined" color-theme="danger">
      Outlined danger button
    </mm-button>
    <mm-button theme="outlined" color-theme="danger" disabled>
      Outlined danger disabled
    </mm-button>
    <br>
  </div>
</template>
```

```vue
<template>
  <div class="wrapper">
    <mm-button color-theme="success">
      Unelevated success button
    </mm-button>
    <mm-button color-theme="success" disabled>
      Unelevated success disabled
    </mm-button>
    <br>
    <mm-button color-theme="warning">
      Unelevated warning button
    </mm-button>
    <mm-button color-theme="warning" disabled>
      Unelevated warning disabled
    </mm-button>
    <br>
    <mm-button color-theme="danger">
      Unelevated danger button
    </mm-button>
    <mm-button color-theme="danger" disabled>
      Unelevated danger disabled
    </mm-button>
    <br>
  </div>
</template>
```
