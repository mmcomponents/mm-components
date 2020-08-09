import DatepickerWrapper from './datepickerWrapper';

const buildDatepickerOptions = ({
  onChange,
  onClose,
  minDate,
  maxDate,
}) => ({
  onChange,
  onClose,
  minDate,
  maxDate,
});

export const createDatepicker = (element, options) => new DatepickerWrapper(
  element,
  buildDatepickerOptions(options),
);

export const destroyDatepicker = (datepickerInstance) => {
  datepickerInstance.destroyDatepicker();
};

export const updateOption = (datepickerInstance, { optionName, value }) => {
  datepickerInstance.updateOption(optionName, value);
};

export const addClassToDatepicker = (datepickerInstance, className) => {
  datepickerInstance.addClassToCalendarContainer(className);
};
