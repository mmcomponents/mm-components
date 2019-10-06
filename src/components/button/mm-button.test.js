import { mount } from '@vue/test-utils';
import MmButton from './mm-button.vue';

function mountComponent() {
  return mount(MmButton, {
    slots: {
      default: 'My Button Text',
    },
  });
}

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

test('should emit hover event when button receive a hover', () => {
  const wrapper = mountComponent();
  const button = wrapper.find('button');
  jest.spyOn(wrapper.vm, '$emit');
  button.vm.$el.dispatchEvent(new Event('hover'));
  expect(wrapper.vm.$emit).toHaveBeenCalledWith('hover');
});

test('should emit blur event when button receive a blur', () => {
  const wrapper = mountComponent();
  const button = wrapper.find('button');
  jest.spyOn(wrapper.vm, '$emit');
  button.vm.$el.dispatchEvent(new Event('blur'));
  expect(wrapper.vm.$emit).toHaveBeenCalledWith('blur');
});
