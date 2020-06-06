```vue
<template>
  <div class="wrapper">
    <mm-row>
      <mm-col xs="2" sm="2" md="4" lg="6" xl="6">
        <mm-button @click="onClick()" @blur="onBlur()">
          Click me unelevated
        </mm-button>
      </mm-col>
      <mm-col xs="2" sm="2" md="4" lg="6" xl="6">
        <mm-button disabled @click="onClick()" @blur="onBlur()">
          Click me unelevated disabled
        </mm-button>
      </mm-col>
    </mm-row>
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
    <mm-row>
      <mm-col xs="2" sm="2" md="4" lg="6" xl="6">
        <mm-button theme="text">
          Text button
        </mm-button>
      </mm-col>
      <mm-col xs="2" sm="2" md="4" lg="6" xl="6">
        <mm-button theme="text" disabled>
          Text disabled
        </mm-button>
      </mm-col>
    </mm-row>
  </div>
</template>
```

```vue
<template>
  <div class="wrapper">
    <mm-row>
      <mm-col xs="2" sm="2" md="4" lg="6" xl="6">
        <mm-button theme="outlined">
          Outlined button
        </mm-button>
      </mm-col>
      <mm-col xs="2" sm="2" md="4" lg="6" xl="6">
        <mm-button theme="outlined" disabled>
           Outlined disabled
         </mm-button>
      </mm-col>
    </mm-row>
  </div>
</template>
```

```vue
<template>
  <div class="wrapper">
    <mm-row>
      <mm-col xs="4" sm="4" md="4" lg="4" xl="4">
        <mm-button theme="outlined" color-theme="success">
          Outlined success button
        </mm-button>
      </mm-col>
      <mm-col xs="4" sm="4" md="2" lg="4" xl="4">
        <mm-button theme="outlined" color-theme="warning">
          Outlined warning button
        </mm-button>
      </mm-col>
      <mm-col xs="4" sm="4" md="2" lg="4" xl="4">
        <mm-button theme="outlined" color-theme="danger">
          Outlined danger button
        </mm-button>
      </mm-col>
    </mm-row>
    <mm-row>
      <mm-col xs="4" sm="4" md="4" lg="4" xl="4">
        <mm-button theme="outlined" color-theme="success" disabled>
          Outlined success button
        </mm-button>
      </mm-col>
      <mm-col xs="4" sm="4" md="2" lg="4" xl="4">
        <mm-button theme="outlined" color-theme="warning" disabled>
         Outlined warning button
        </mm-button>
      </mm-col>
      <mm-col xs="4" sm="4" md="2" lg="4" xl="4">
        <mm-button theme="outlined" color-theme="danger" disabled>
          Outlined danger button
        </mm-button>
      </mm-col>
    </mm-row>
  </div>
</template>
```

```vue
<template>
  <div class="wrapper">
    <mm-row>
      <mm-col xs="4" sm="4" md="4" lg="4" xl="4">
        <mm-button color-theme="success">
          Outlined success button
        </mm-button>
      </mm-col>
      <mm-col xs="4" sm="4" md="2" lg="4" xl="4">
        <mm-button color-theme="warning">
          Outlined warning button
        </mm-button>
      </mm-col>
      <mm-col xs="4" sm="4" md="2" lg="4" xl="4">
        <mm-button color-theme="danger">
          Outlined danger button
        </mm-button>
      </mm-col>
    </mm-row>
    <mm-row>
      <mm-col xs="4" sm="4" md="4" lg="4" xl="4">
        <mm-button color-theme="success" disabled>
          Outlined success button
        </mm-button>
      </mm-col>
      <mm-col xs="4" sm="4" md="2" lg="4" xl="4">
        <mm-button color-theme="warning" disabled>
         Outlined warning button
        </mm-button>
      </mm-col>
      <mm-col xs="4" sm="4" md="2" lg="4" xl="4">
        <mm-button color-theme="danger" disabled>
          Outlined danger button
        </mm-button>
      </mm-col>
    </mm-row>
  </div>
</template>
```

```vue
<template>
  <div class="wrapper">
    <mm-row>
      <mm-col xs="4" sm="4" md="4" lg="6" xl="6">
        <mm-button icon="send">
          Button with icon
        </mm-button>
      </mm-col>
      <mm-col xs="4" sm="4" md="4" lg="6" xl="6">
        <mm-button icon="send" color-theme="success">
          Button with icon
        </mm-button>
      </mm-col>
    </mm-row>
  </div>
</template>
```
