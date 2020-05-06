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

```vue
<template>
  <div class="wrapper">
    <mm-form :on-submit="() => {}">
      <mm-field label="Are you ready" required>
        <mm-radio-group :options="options" />
      </mm-field>
      <mm-submit-button>
        Submit
      </mm-submit-button>
    </mm-form>
  </div>
</template>

<script>
import MmRadioGroup from "./mm-radio-group"; 
import MmForm from "../form/mm-form"; 
import MmField from "../field/mm-field"; 
import MmSubmitButton from "../submit-button/mm-submit-button"; 
import MmRadioInput from '../radio-input/mm-radio-input.vue';

export default {
  components: { MmField ,
    MmRadioGroup,
    MmForm,
    MmSubmitButton,
    MmRadioInput,
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
