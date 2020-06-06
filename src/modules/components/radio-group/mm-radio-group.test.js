import { mount } from '@vue/test-utils';
import MmRadioInput from './mm-radio-input.vue';
import MmRadioGroup from '.';

const getOptionsMock = () => [
  { label: 'Label 1', value: 'value-1' },
  { label: 'Label 2', value: 'value-2' },
];

function mountComponent(props) {
  return mount(MmRadioGroup, {
    propsData: {
      options: getOptionsMock(),
      ...props,
    },
  });
}

describe('mm-radio-group', () => {
  it('should render component with expected css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toContain('mm-radio-group');
  });

  it('should render all radio group options', () => {
    const wrapper = mountComponent();
    const options = wrapper.findAll(MmRadioInput);

    expect(options.at(0).props().option).toEqual(getOptionsMock()[0]);
    expect(options.at(1).props().option).toEqual(getOptionsMock()[1]);
  });
});
