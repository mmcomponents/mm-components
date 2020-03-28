import { mount } from '@vue/test-utils';
import MmInput from './mm-input.vue';

const getLabelMock = () => 'First Name';
const getCustomValidationsMock = () => [
  { validate: value => value === 'correct', errorMessage: 'Invalid value' },
];

function mountComponent(props) {
  return mount(MmInput, {
    propsData: {
      label: getLabelMock(),
      ...props,
    },
  });
}

describe('mm-input', () => {
  it('should render component wrapper with expected css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toContain('mm-input');
  });

  it('should render label as expected', () => {
    const wrapper = mountComponent();
    const label = wrapper.find('label');
    expect(label.text()).toBe(getLabelMock());
  });

  it('should input value on input', async () => {
    const wrapper = mountComponent();
    jest.spyOn(wrapper.vm, '$emit');
    const input = wrapper.find('input');
    input.setValue('mock input value');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$emit).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.$emit).toHaveBeenCalledWith('input', 'mock input value');
  });

  it('should validate value on init', async () => {
    const wrapper = mountComponent({ value: 'my-value', customValidations: getCustomValidationsMock() });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isValid).toBe(false);
  });

  it('should not show error message until blur', async () => {
    const wrapper = mountComponent({ value: 'my-value', customValidations: getCustomValidationsMock() });
    await wrapper.vm.$nextTick();
    let errorMessage = wrapper.find('mm-input__error-message');
    expect(errorMessage.exists()).toBe(false);
    const input = wrapper.find('input');
    input.trigger('blur');
    await wrapper.vm.$nextTick();
    errorMessage = wrapper.find('.mm-input__error-message');
    expect(errorMessage.exists()).toBe(true);
    expect(errorMessage.text()).toBe('Invalid value');
  });

  it('should add valid class when value is valid', async () => {
    const wrapper = mountComponent({ value: 'correct', customValidations: getCustomValidationsMock() });
    await wrapper.vm.$nextTick();
    expect(wrapper.classes()).toContain('mm-input--valid');
  });

  it('should add invalid class when value is invalid', async () => {
    const wrapper = mountComponent({ value: 'incorrect', customValidations: getCustomValidationsMock() });
    await wrapper.vm.$nextTick();
    expect(wrapper.classes()).toContain('mm-input--invalid');
  });
});
