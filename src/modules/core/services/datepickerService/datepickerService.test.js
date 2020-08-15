import DatepickerWrapper from './datepickerWrapper';
import {
  addClassToDatepicker,
  createDatepicker,
  destroyDatepicker,
  updateOption,
} from '.';

jest.mock('./datepickerWrapper');

const getElementMock = () => 'mockElement';
const getOptionsMock = () => ({
  onChange: () => 'onChangeMock',
  onClose: () => 'onCloseMock',
  minDate: '13/05/1995',
  maxDate: '14/03/1996',
});
const getDatepickerWrapperInstanceMock = () => ({
  destroyDatepicker: jest.fn(),
  updateOption: jest.fn(),
  addClassToCalendarContainer: jest.fn(),
});
const getOptionNameMock = () => 'minDate';
const getOptionValueMock = () => '01/01/2019';

describe('datepickerService', () => {
  beforeEach(() => {
    DatepickerWrapper.mockClear();
  });

  it('should create a new instance of DatepickerWrapper with expected options', () => {
    const elementMock = getElementMock();
    const optionsMock = getOptionsMock();
    createDatepicker(elementMock, optionsMock);
    expect(DatepickerWrapper).toHaveBeenCalledTimes(1);
    expect(DatepickerWrapper).toHaveBeenCalledWith(elementMock, optionsMock);
  });

  it('should destroy DatepickerWrapper instance', () => {
    const datepickerInstanceMock = getDatepickerWrapperInstanceMock();
    destroyDatepicker(datepickerInstanceMock);
    expect(datepickerInstanceMock.destroyDatepicker).toHaveBeenCalledTimes(1);
  });

  it('should update datepicker instance option', () => {
    const datepickerInstanceMock = getDatepickerWrapperInstanceMock();
    updateOption(datepickerInstanceMock, {
      optionName: getOptionNameMock(),
      value: getOptionValueMock(),
    });
    expect(datepickerInstanceMock.updateOption).toHaveBeenCalledTimes(1);
    expect(datepickerInstanceMock.updateOption)
      .toHaveBeenCalledWith(getOptionNameMock(), getOptionValueMock());
  });

  it('should add custom class to calendar', () => {
    const datepickerInstanceMock = getDatepickerWrapperInstanceMock();
    addClassToDatepicker(datepickerInstanceMock, 'customClassName');
    expect(datepickerInstanceMock.addClassToCalendarContainer).toHaveBeenCalledTimes(1);
    expect(datepickerInstanceMock.addClassToCalendarContainer)
      .toHaveBeenCalledWith('customClassName');
  });
});
