import { mount } from '@vue/test-utils';
import MmIcon from './mm-icon.vue';

function mountComponent(props) {
  return mount(MmIcon, {
    propsData: {
      ...props,
    },
  });
}

describe('mm-icon', () => {
  it('should render component with expected css classes', () => {
    const wrapper = mountComponent({ icon: 'send' });
    expect(wrapper.classes()).toContain('mm-icon');
    expect(wrapper.classes()).toContain('material-icons');
  });

  it('should render icon as expected', () => {
    const wrapper = mountComponent({ icon: 'send' });
    const icon = wrapper.find('i');
    expect(icon.text()).toBe('send');
  });
});
