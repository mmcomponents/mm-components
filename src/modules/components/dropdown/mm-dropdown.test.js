import { mount, createLocalVue } from '@vue/test-utils';
import MmDropdown from '.';
import MmLabel from '../label';
import MmIcon from '../icon';

const getLabelMock = () => 'Dropdown label mock';
const getOptionMock = () => ({ value: 'option value mock', label: 'I am an option' });
const getDropdownPlaceholderMock = () => 'Dropdown placeholder';

const localVue = createLocalVue();

localVue.directive('on-click-outside', {});

function mountComponent(propsData) {
  return mount(MmDropdown, {
    propsData: {
      label: getLabelMock(),
      ...propsData,
    },
    localVue,
  });
}
describe('MmDropdown', () => {
  it('should render dropdown container', () => {
    const wrapper = mountComponent();
    const dropdown = wrapper.find(MmDropdown);
    expect(dropdown.classes()).toContain('mm-dropdown__container');
  });

  it('should render dropdown label', () => {
    const wrapper = mountComponent();
    const label = wrapper.find(MmLabel);
    expect(label.exists()).toEqual(true);
    expect(label.text()).toEqual(getLabelMock());
  });

  it('should render dropdown icon', () => {
    const wrapper = mountComponent();
    const icon = wrapper.find(MmIcon);
    expect(icon.exists()).toEqual(true);
    expect(icon.text()).toEqual('expand_more');
  });

  it('should render dropdown trigger button', () => {
    const wrapper = mountComponent();
    const triggerButton = wrapper.find('.mm-dropdown__trigger-button');
    expect(triggerButton.exists()).toEqual(true);
    expect(triggerButton.text()).toContain('Selecione um item');
  });

  it('should dropdown trigger value be equal dropdown trigger label when it is provided', () => {
    const dropdownTriggerLabel = 'Custom dropdown trigger label';
    const wrapper = mountComponent({
      dropdownTriggerLabel,
    });
    expect(wrapper.vm.dropdownLabelValue).toEqual(dropdownTriggerLabel);
  });

  it('should dropdown trigger value be equal selected option label when it is set and dropdown trigger label is not set', () => {
    const wrapper = mountComponent();
    wrapper.setData({ selectedOptionLabel: getOptionMock().label });
    expect(wrapper.vm.dropdownLabelValue).toEqual(getOptionMock().label);
  });

  it('should dropdown trigger value be equal placeholder when value and dropdown trigger label are not set', () => {
    const wrapper = mountComponent();
    wrapper.setProps({ placeholder: getDropdownPlaceholderMock() });
    expect(wrapper.vm.dropdownLabelValue).toEqual(getDropdownPlaceholderMock());
  });

  it('should setup initial data', () => {
    expect(MmDropdown.data()).toEqual({
      selectedOptionLabel: null,
      showOptions: false,
    });
  });

  it('should toggle options when dropdown trigger button receives a click', async () => {
    const wrapper = mountComponent();
    jest.spyOn(wrapper.vm, 'toggleOptions');
    const triggerButton = wrapper.find('.mm-dropdown__trigger-button');
    triggerButton.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.toggleOptions).toHaveBeenCalledTimes(1);
  });

  it('should toggle options ', () => {
    const wrapper = mountComponent();
    expect(wrapper.vm.showOptions).toEqual(false);
    wrapper.vm.toggleOptions();
    expect(wrapper.vm.showOptions).toEqual(true);
    wrapper.vm.toggleOptions();
    expect(wrapper.vm.showOptions).toEqual(false);
  });

  it('should close options ', () => {
    const wrapper = mountComponent();
    wrapper.setData({
      showOptions: true,
    });
    wrapper.vm.closeOptions();
    expect(wrapper.vm.showOptions).toEqual(false);
  });

  it('should select dropdown option', () => {
    const wrapper = mountComponent();
    wrapper.vm.selectOption(getOptionMock());
    expect(wrapper.vm.selectedOptionLabel).toEqual(getOptionMock().label);
  });

  it('should emit an input event when select dropdown option', () => {
    const wrapper = mountComponent();
    jest.spyOn(wrapper.vm, '$emit');
    wrapper.vm.selectOption(getOptionMock());
    expect(wrapper.vm.$emit).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.$emit).toHaveBeenCalledWith('option-selected', getOptionMock().value);
  });

  it('should emit an event with toggle-options when click on dropdown trigger', async () => {
    const wrapper = mountComponent();
    const triggerButton = wrapper.find('.mm-dropdown__trigger-button');
    triggerButton.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('toggle-options')).toEqual([[true]]);
  });
});
