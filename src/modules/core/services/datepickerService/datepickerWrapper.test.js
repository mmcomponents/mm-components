import flatpickr from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import DatepickerWrapper from './datepickerWrapper';

const mockThirdPartDatepickerInstance = {
  destroy: jest.fn(),
  set: jest.fn(),
  calendarContainer: {
    classList: {
      add: jest.fn(),
    },
  },
};

jest.mock('flatpickr', () => jest.fn().mockImplementation(() => mockThirdPartDatepickerInstance));
jest.mock('flatpickr/dist/l10n/pt', () => jest.fn().mockImplementation(() => 'mock locale option'));

const getElementMock = () => 'mockElement';
const getOptionsMock = () => ({
  onChange: () => 'onChangeMock',
  onClose: () => 'onCloseMock',
  minDate: '13/05/1995',
  maxDate: '14/03/1996',
});
const getThirdPartLibraryOptionsMock = () => ({
  locale: Portuguese,
  dateFormat: 'd/m/Y',
});

describe('DatepickerWrapper', () => {
  it('should call third part library when instantiate new DatepickerWrapper', () => {
    const options = getOptionsMock();
    const datepickerWrapper = new DatepickerWrapper(getElementMock(), options);
    const thirdPartOptions = {
      ...getThirdPartLibraryOptionsMock(),
      ...options,
    };
    expect(flatpickr).toHaveBeenCalledTimes(1);
    expect(flatpickr).toHaveBeenCalledWith(getElementMock(), thirdPartOptions);
    expect(datepickerWrapper.instance).toEqual(mockThirdPartDatepickerInstance);
  });

  it('should call third part library destroy method when destroy DatepickerWrapper instance', () => {
    const datepickerWrapper = new DatepickerWrapper(getElementMock(), getOptionsMock());
    datepickerWrapper.destroyDatepicker();
    expect(mockThirdPartDatepickerInstance.destroy).toHaveBeenCalledTimes(1);
  });

  it('should set option', () => {
    const datepickerWrapper = new DatepickerWrapper(getElementMock(), getOptionsMock());
    datepickerWrapper.updateOption('mockOptionName', 'mockOptionValue');
    expect(mockThirdPartDatepickerInstance.set).toHaveBeenCalledTimes(1);
    expect(mockThirdPartDatepickerInstance.set).toHaveBeenCalledWith('mockOptionName', 'mockOptionValue');
  });

  it('should get calendar container', () => {
    const datepickerWrapper = new DatepickerWrapper(getElementMock(), getOptionsMock());
    const calendarContainer = datepickerWrapper.getCalendarContainer();
    expect(calendarContainer).toEqual(mockThirdPartDatepickerInstance.calendarContainer);
  });

  it('should add class to calendar container', () => {
    const datepickerWrapper = new DatepickerWrapper(getElementMock(), getOptionsMock());
    datepickerWrapper.addClassToCalendarContainer('mockClassName');
    expect(mockThirdPartDatepickerInstance
      .calendarContainer.classList.add).toHaveBeenCalledTimes(1);
    expect(mockThirdPartDatepickerInstance
      .calendarContainer.classList.add).toHaveBeenCalledWith('mockClassName');
  });
});
