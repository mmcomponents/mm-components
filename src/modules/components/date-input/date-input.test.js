import { mount } from '@vue/test-utils';
import DateInput from '.';
import {
  createDatepicker,
  destroyDatepicker,
  updateOption,
  addClassToDatepicker,
} from '../../core/services/datepickerService';

jest.mock('../../core/services/datepickerService', () => ({
  createDatepicker: jest.fn().mockReturnValue('mock datepicker instance'),
  destroyDatepicker: jest.fn(),
  updateOption: jest.fn(),
  addClassToDatepicker: jest.fn(),
}));

const getLabelMock = () => 'Label mock';
const getMinDateMock = () => '01/01/2019';
const getMaxDateMock = () => '31/12/2019';

function mountComponent(propsData) {
  return mount(DateInput, {
    propsData: {
      label: getLabelMock(),
      ...propsData,
    },
  });
}

describe('DateInput', () => {
  beforeEach(() => {
    createDatepicker.mockClear();
    destroyDatepicker.mockClear();
    updateOption.mockClear();
    addClassToDatepicker.mockClear();
  });

  it('should setup component initial data', () => {
    expect(DateInput.data()).toEqual({ datepickerInstance: null, value: null });
  });

  it('should date input contains expected css class', () => {
    const wrapper = mountComponent();
    expect(wrapper.classes()).toContain('mm-date-input');
  });

  it('should create datepicker instance on mount', () => {
    const wrapper = mountComponent();
    expect(createDatepicker).toHaveBeenCalledTimes(1);
    expect(createDatepicker).toHaveBeenCalledWith(
      wrapper.vm.$refs.datepickerInput.$el, {
        onChange: wrapper.props().onChange,
        onClose: wrapper.props().onClose,
        minDate: wrapper.props().minDate,
        maxDate: wrapper.props().maxDate,
      },
    );
    expect(wrapper.vm.datepickerInstance).toEqual('mock datepicker instance');
  });

  it('should add ca-datepicker class to datepicker instance on mount', () => {
    const wrapper = mountComponent();
    expect(addClassToDatepicker).toHaveBeenCalledTimes(1);
    expect(addClassToDatepicker).toHaveBeenCalledWith(
      wrapper.vm.datepickerInstance,
      'mm-datepicker',
    );
  });

  it('should emit an input event when input receives an input event', async () => {
    const wrapper = mountComponent();
    const input = wrapper.find('input');
    const getNewInputValueMock = () => 'new input value mock';

    input.element.value = getNewInputValueMock();
    input.trigger('input');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().input.length).toBe(1);
    expect(wrapper.emitted().input).toEqual([[getNewInputValueMock()]]);
  });

  it('should destroy datepicker instance before component destroy', () => {
    const wrapper = mountComponent();
    wrapper.destroy();
    expect(destroyDatepicker).toHaveBeenCalledTimes(1);
    expect(destroyDatepicker).toHaveBeenCalledWith(wrapper.vm.datepickerInstance);
  });

  it('should update datepicker min date when component min date property update', async () => {
    const wrapper = mountComponent();

    wrapper.setProps({
      minDate: getMinDateMock(),
    });
    await wrapper.vm.$nextTick();

    expect(updateOption).toHaveBeenCalledTimes(1);
    expect(updateOption).toHaveBeenCalledWith(wrapper.vm.datepickerInstance, {
      optionName: 'minDate',
      value: getMinDateMock(),
    });
  });

  it('should update datepicker max date when component max date property update', async () => {
    const wrapper = mountComponent();

    wrapper.setProps({
      maxDate: getMaxDateMock(),
    });
    await wrapper.vm.$nextTick();

    expect(updateOption).toHaveBeenCalledTimes(1);
    expect(updateOption).toHaveBeenCalledWith(wrapper.vm.datepickerInstance, {
      optionName: 'maxDate',
      value: getMaxDateMock(),
    });
  });
});
