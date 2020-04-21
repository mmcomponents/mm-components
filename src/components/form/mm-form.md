```vue
<template>
  <div class="wrapper">
    <mm-form :on-submit="onSubmit">
      <mm-row>
        <mm-col lg="6">
          <mm-field label="First Name" required>
            <mm-input v-model="firstName" />
          </mm-field>
        </mm-col>
        <mm-col lg="6">
          <mm-field label="First Name" required>
            <mm-input v-model="lastName" />
          </mm-field>
        </mm-col>
      </mm-row>
      <mm-row>
        <mm-col>
          <mm-submit-button color-theme="success">
            Enviar
          </mm-submit-button>
        </mm-col>    
      </mm-row>
    </mm-form>
  </div>
</template>

<script>
import MmField from "../field/mm-field";
import MmInput from "../input/mm-input";
import MmSubmitButton from "../submit-button/mm-submit-button";
import MmRow from "../row/mm-row.vue";
import MmCol from "../column/mm-column";
 
export default { 
  components: {
    MmRow,
    MmSubmitButton,
    MmInput,
    MmField,
    MmCol,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
    };
  },
  methods: {
    onSubmit() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(true);
        }, 3000);
      });
    }, 
  },
};
</script>
