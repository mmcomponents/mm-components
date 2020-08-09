import { mount } from '@vue/test-utils';
import MmDivider from '../divider';
import MmDropdownOption from '.';

const getSelectOptionMock = () => jest.fn();
const getCloseOptionsMock = () => jest.fn();
const getOptionMock = () => ({ value: 'my mock value', label: 'I am an option' });
const getOptionContentMock = () => 'I am an option';

function mountComponent(propsData, selectOptionMock = jest.fn, closeOptionsMock = jest.fn()) {
  return mount(MmDropdownOption, {
    propsData: {
      ...propsData,
    },
    provide() {
      return {
        selectOption: selectOptionMock,
        closeOptions: closeOptionsMock,
      };
    },
  });
}

describe('MmDropdownOption', () => {
  it('should render dropdown option with expected css class', () => {
    const wrapper = mountComponent({ option: getOptionMock() });
    const option = wrapper.find('.mm-dropdown-option');
    expect(option.exists());
  });

  it('should render dropdown option with expected content', () => {
    const wrapper = mountComponent({ option: getOptionMock() });
    expect(wrapper.text()).toEqual(getOptionContentMock());
  });

  it('should render divider only with option has with-distinction property', () => {
    const wrapper = mountComponent({ option: getOptionMock() });
    expect(wrapper.find(MmDivider).exists()).toEqual(false);
    wrapper.setProps({
      option: {
        ...getOptionMock(),
        withDistinction: true,
      },
    });
    expect(wrapper.find(MmDivider).exists()).toEqual(true);
  });

  it('should call on select callback when click on option', () => {
    const wrapper = mountComponent({ option: getOptionMock() });
    jest.spyOn(wrapper.vm, 'onSelect');
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.vm.onSelect).toHaveBeenCalledTimes(1);
  });

  it('should select option on select', () => {
    const selectOptionMock = getSelectOptionMock();
    const closeOptionsMock = getSelectOptionMock();
    const wrapper = mountComponent({
      option: getOptionMock(),
    },
    selectOptionMock,
    closeOptionsMock);
    wrapper.vm.onSelect();
    expect(selectOptionMock).toHaveBeenCalledTimes(1);
    expect(selectOptionMock).toHaveBeenCalledWith(getOptionMock());
  });

  it('should close options on select', () => {
    const selectOptionMock = getSelectOptionMock();
    const closeOptionsMock = getCloseOptionsMock();
    const wrapper = mountComponent({
      option: getOptionMock(),
    },
    selectOptionMock,
    closeOptionsMock);
    wrapper.vm.onSelect();
    expect(closeOptionsMock).toHaveBeenCalledTimes(1);
  });
});
