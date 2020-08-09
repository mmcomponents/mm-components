import {
  getCurrentDate,
  getFirstDayOfTheMonth,
  getFirstDayOfTheWeek,
  subtractDays,
} from '.';

const getMockDate = () => '26/10/2019';

describe('DateService', () => {
  beforeEach(() => {
    Date.now = jest.fn().mockReturnValue(new Date('2019-10-26 00:00:00').getTime());
  });

  it('should get current date', () => {
    expect(getCurrentDate()).toEqual(getMockDate());
  });

  it('should get first day of the month', () => {
    expect(getFirstDayOfTheMonth(getMockDate())).toEqual('01/10/2019');
  });

  it('should get first day of the week', () => {
    expect(getFirstDayOfTheWeek(getMockDate())).toEqual('20/10/2019');
  });

  it('should subtract two days of date', () => {
    expect(subtractDays(2, getMockDate())).toEqual('24/10/2019');
  });
});
