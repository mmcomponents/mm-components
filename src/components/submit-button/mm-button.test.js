import { mount } from '@vue/test-utils';
import MmButton from './mm-submit-button.vue';
import MmIcon from '../icon/mm-icon.vue';

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

describe('mm-button', () => {
  it('should render a button with mm-button class', () => {
    const wrapper = mountComponent();
    const button = wrapper.find('button');
    expect(button.classes()).toContain('mm-button');
  });

  it('should render unelevated button with standard color by default', () => {
    const wrapper = mountComponent();
    const button = wrapper.find('button');
    expect(button.classes()).toContain('mm-button-theme--unelevated');
    expect(button.classes()).toContain('mm-button-color--standard');
  });

  it('should render text button', () => {
    const wrapper = mountComponent({
      theme: 'text',
    });
    const button = wrapper.find('button');
    expect(button.classes()).toContain('mm-button-theme--text');
  });

  it('should render outlined button', () => {
    const wrapper = mountComponent({
      theme: 'outlined',
    });
    const button = wrapper.find('button');
    expect(button.classes()).toContain('mm-button-theme--outlined');
  });

  it('should render color themed button', () => {
    const wrapper = mountComponent({
      colorTheme: 'success',
    });
    const button = wrapper.find('button');
    expect(button.classes()).toContain('mm-button-color--success');
  });

  it('should render a button with text content', () => {
    const wrapper = mountComponent();
    const button = wrapper.find('button');
    expect(button.exists()).toEqual(true);
    expect(button.text()).toEqual('My Button Text');
  });

  it('should emit click event when button receive a click', () => {
    const wrapper = mountComponent();
    const button = wrapper.find('button');
    jest.spyOn(wrapper.vm, '$emit');
    button.vm.$el.dispatchEvent(new Event('click'));
    expect(wrapper.vm.$emit).toHaveBeenCalledWith('click');
  });

  it('should emit blur event when button receive a blur', () => {
    const wrapper = mountComponent();
    const button = wrapper.find('button');
    jest.spyOn(wrapper.vm, '$emit');
    button.vm.$el.dispatchEvent(new Event('blur'));
    expect(wrapper.vm.$emit).toHaveBeenCalledWith('blur');
  });

  it('should render a button with icon', () => {
    const wrapper = mountComponent({
      icon: 'send',
    });
    const icon = wrapper.find(MmIcon);
    expect(icon.props('icon')).toBe('send');
  });
});
