import { mount, createLocalVue } from '@vue/test-utils';
import MmPopover from '.';
import {
  createPopover,
  destroyPopover,
} from '../../core/services/popoverService/popoverService';

jest.mock('../../core/services/popoverService/popoverService', () => ({
  createPopover: jest.fn().mockReturnValue('mock popover instance'),
  destroyPopover: jest.fn(),
}));

const localVue = createLocalVue();
localVue.directive('on-click-outside', {});

function mountComponent(propsData) {
  return mount(MmPopover, {
    propsData: {
      ...propsData,
    },
    localVue,
  });
}

describe('MmPopover', () => {
  beforeEach(() => {
    createPopover.mockClear();
    destroyPopover.mockClear();
  });

  it('should setup component initial data', () => {
    expect(MmPopover.data()).toEqual({
      showPopover: false,
      popoverInstance: null,
    });
  });

  it('should date input contains expected css class', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toContain('mm-popover');
  });

  it('should render popover reference', () => {
    const wrapper = mountComponent();
    const referenceContainer = wrapper.find('.mm-popover__reference');
    expect(referenceContainer.exists()).toEqual(true);
  });

  it('should handle reference click', () => {
    const wrapper = mountComponent();
    jest.spyOn(wrapper.vm, 'onReferenceClick');
    const referenceContainer = wrapper.find('.mm-popover__reference');
    referenceContainer.trigger('click');
    expect(wrapper.vm.onReferenceClick).toHaveBeenCalledTimes(1);
  });

  it('should create popover instance on mount', () => {
    const wrapper = mountComponent();
    const referenceContainer = wrapper.vm.$el.querySelector('.mm-popover__reference');
    const contentContainer = wrapper.vm.$el.querySelector('.mm-popover__content');
    expect(createPopover).toHaveBeenCalledTimes(1);
    expect(createPopover).toHaveBeenCalledWith(
      referenceContainer,
      contentContainer,
      { placement: wrapper.props().placement },
    );
    expect(wrapper.vm.popoverInstance).toEqual('mock popover instance');
  });

  it('should open popover', () => {
    const wrapper = mountComponent();
    expect(wrapper.vm.showPopover).toEqual(false);
    wrapper.vm.openPopover();
    expect(wrapper.vm.showPopover).toEqual(true);
  });

  it('should close popover', () => {
    const wrapper = mountComponent();
    wrapper.setData({
      showPopover: true,
    });
    wrapper.vm.closePopover();
    expect(wrapper.vm.showPopover).toEqual(false);
  });

  it('should open popover when click on reference', () => {
    const wrapper = mountComponent();
    jest.spyOn(wrapper.vm, 'openPopover');
    wrapper.vm.onReferenceClick();
    expect(wrapper.vm.openPopover).toHaveBeenCalledTimes(1);
  });

  it('should not open popover when click on reference and openOnReferenceClick is false', () => {
    const wrapper = mountComponent({
      openOnReferenceClick: false,
    });
    jest.spyOn(wrapper.vm, 'openPopover');
    wrapper.vm.onReferenceClick();
    expect(wrapper.vm.openPopover).not.toHaveBeenCalled();
  });

  it('should destroy popover instance before component destroy', () => {
    const wrapper = mountComponent();
    wrapper.destroy();
    expect(destroyPopover).toHaveBeenCalledTimes(1);
    expect(destroyPopover).toHaveBeenCalledWith(wrapper.vm.popoverInstance);
  });
});
