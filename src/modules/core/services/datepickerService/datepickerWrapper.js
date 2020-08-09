import flatpickr from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';

const datepickerStandardOptions = {
  locale: Portuguese,
  dateFormat: 'd/m/Y',
};

class DatepickerWrapper {
  constructor(element, options) {
    this.instance = flatpickr(element, {
      ...datepickerStandardOptions,
      ...options,
    });
  }

  updateOption(optionName, value) {
    this.instance.set(optionName, value);
  }

  getCalendarContainer() {
    return this.instance.calendarContainer;
  }

  addClassToCalendarContainer(className) {
    const calendar = this.getCalendarContainer();
    calendar.classList.add(className);
  }

  destroyDatepicker() {
    this.instance.destroy();
  }
}
export default DatepickerWrapper;
