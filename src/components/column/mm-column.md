```vue
<template>
  <div class="wrapper">
    <mm-row style="background-color: cadetblue">
      <mm-col style="background-color: #ffebee">
        Column 12
      </mm-col>
    </mm-row>
    <mm-row style="background-color: cadetblue">
      <mm-col lg="6" style="background-color: #ffebee">
        Column 6
      </mm-col>
      <mm-col lg="6" style="background-color: #ffebee">
        Column 6
      </mm-col>
    </mm-row>
    <mm-row style="background-color: cadetblue">
      <mm-col lg="3" style="background-color: #ffebee">
        Column 3
      </mm-col>
      <mm-col lg="3" style="background-color: #ffebee">
        Column 3
      </mm-col>
      <mm-col
        offset-lg="3"
        lg="3"
        style="background-color: #ffebee">
        Column 3
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
