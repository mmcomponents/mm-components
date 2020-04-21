import { mount } from '@vue/test-utils';
import MmField from './mm-field.vue';

const getLabelMock = () => 'First Name';
const registerFieldMock = jest.fn();

function mountComponent(props) {
  return mount(MmField, {
    propsData: {
      label: getLabelMock(),
      ...props,
    },
    provide() {
      return {
        formVm: {
          registerField: registerFieldMock,
        },
      };
    },
  });
}

describe('mm-field', () => {
  beforeEach(() => {
    registerFieldMock.mockClear();
  });

  it('should register field after mount', () => {
    const wrapper = mountComponent();
    expect(registerFieldMock).toHaveBeenCalledTimes(1);
    expect(registerFieldMock).toHaveBeenCalledWith(wrapper.vm);
  });

  it('should render component with expected css classes', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toContain('mm-field');
  });

  it('should add required style when provide required props', () => {
    const wrapper = mountComponent({ required: true });
    expect(wrapper.classes()).toContain('mm-field--required');
  });

  it('should render field label', () => {
    const wrapper = mountComponent();
    const label = wrapper.find('label');
    expect(label.text()).toBe(getLabelMock());
  });

  it('should add invalid style when enable validation and set field invalid', () => {
    const wrapper = mountComponent();
    wrapper.setData({
      isValidationFeedbackEnabled: true,
      isValid: false,
    });
    expect(wrapper.classes()).toContain('mm-field--invalid');
  });

  it('should show error message when enable validation and set field invalid', () => {
    const wrapper = mountComponent();
    wrapper.setData({
      errorMessage: 'Invalid field',
      isValidationFeedbackEnabled: true,
      isValid: false,
    });
    const errorMessage = wrapper.find('span.mm-field__error-message');
    expect(errorMessage.text()).toBe('Invalid field');
  });
});
