import { mount } from '@vue/test-utils';
import MmButton from './mm-button.vue';

function mountComponent(propsData) {
  return mount(MmButton, {
    slots: {
      default: 'My Button Text',
    },
    propsData: {
      ...propsData,
    },
  });
}

test('should render a button with mm-button class', () => {
  const wrapper = mountComponent();
  const button = wrapper.find('button');
  expect(button.classes()).toContain('mm-button');
});

test('should render unelevated button by default', () => {
  const wrapper = mountComponent();
  expect(wrapper.vm.buttonClass).toEqual('mm-button-theme--unelevated');
  const button = wrapper.find('button');
  expect(button.classes()).toContain('mm-button-theme--unelevated');
});

test('should render text button by default', () => {
  const wrapper = mountComponent({
    theme: 'text',
  });
  expect(wrapper.vm.buttonClass).toEqual('mm-button-theme--text');
  const button = wrapper.find('button');
  expect(button.classes()).toContain('mm-button-theme--text');
});

test('should render outlined button by default', () => {
  const wrapper = mountComponent({
    theme: 'outlined',
  });
  expect(wrapper.vm.buttonClass).toEqual('mm-button-theme--outlined');
  const button = wrapper.find('button');
  expect(button.classes()).toContain('mm-button-theme--outlined');
});

it('should render a themed button', () => {});

test('should render a button with text content', () => {
  const wrapper = mountComponent();
  const button = wrapper.find('button');
  expect(button.exists()).toEqual(true);
  expect(button.text()).toEqual('My Button Text');
});

test('should emit click event when button receive a click', () => {
  const wrapper = mountComponent();
  const button = wrapper.find('button');
  jest.spyOn(wrapper.vm, '$emit');
  button.vm.$el.dispatchEvent(new Event('click'));
  expect(wrapper.vm.$emit).toHaveBeenCalledWith('click');
});

test('should emit blur event when button receive a blur', () => {
  const wrapper = mountComponent();
  const button = wrapper.find('button');
  jest.spyOn(wrapper.vm, '$emit');
  button.vm.$el.dispatchEvent(new Event('blur'));
  expect(wrapper.vm.$emit).toHaveBeenCalledWith('blur');
});
