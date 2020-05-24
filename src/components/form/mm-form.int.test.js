import { mount } from '@vue/test-utils';
import MmField from '../field/mm-field.vue';
import MmInput from '../input/mm-input.vue';
import MmRow from '../row/mm-row.vue';
import MmCol from '../column/mm-column.vue';
import MmSubmitButton from '../submit-button/mm-submit-button.vue';
import MmForm from '.';

const getDefaultTemplateMock = () => `<mm-form :on-submit="onSubmit">
  <mm-row>
    <mm-col>
      <mm-field label="First Name" required>
        <mm-input v-model="firstName" />
      </mm-field>
    </mm-col>
    <mm-col>
      <mm-field label="Last Name" required>
        <mm-input v-model="lastName" />
      </mm-field>
    </mm-col>
  </mm-row>
  <mm-row>
    <mm-col>
      <mm-submit-button color-theme="success">
        Submit
      </mm-submit-button>
    </mm-col>    
  </mm-row>
</mm-form>
`;

function getInputByFieldLabel(wrapper, label) {
  return wrapper.findAll(MmField)
    .filter(w => w.props('label') === label)
    .at(0)
    .find(MmInput);
}

function mountDefaultTemplate() {
  return mount({
    template: getDefaultTemplateMock(),
    data() {
      return {
        onSubmit: jest.fn(),
        firstName: '',
        lastName: '',
      };
    },
    components: {
      MmForm,
      MmRow,
      MmCol,
      MmSubmitButton,
      MmField,
      MmInput,
    },
  });
}

describe('mm-form::integration', () => {
  it('should submit form after set fields', async () => {
    const wrapper = mountDefaultTemplate();

    const firstName = getInputByFieldLabel(wrapper, 'First Name');
    firstName.setValue('mock first name');
    const lastName = getInputByFieldLabel(wrapper, 'Last Name');
    lastName.setValue('mock last name');

    await wrapper.vm.$nextTick();
    const submitButton = wrapper.find(MmSubmitButton);
    submitButton.trigger('submit');

    await wrapper.vm.$nextTick();

    const form = wrapper.find(MmForm);
    expect(form.props().onSubmit).toHaveBeenCalledTimes(1);
  });
});
