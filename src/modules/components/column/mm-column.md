```vue
<template>
  <div class="wrapper">
    <mm-row style="background-color: cadetblue">
      <mm-col style="background-color: #ffebee">
        Column 12
      </mm-col>
    </mm-row>
    <mm-row style="background-color: cadetblue">
      <mm-col
        xs="4"
        sm="4"
        md="4"
        lg="6"
        xl="6"
        style="background-color: #ffebee">
        Column middle
      </mm-col>
      <mm-col
        xs="4"
        sm="4"
        md="4"
        lg="6"
        xl="6"
        style="background-color: #ffebee">
        Column middle
      </mm-col>
    </mm-row>
  </div>
</template>

<script>
import MmCol from '../column/mm-column.vue';

export default {
  components: {
    MmCol,
  },
};
</script>
```
