import Popper from 'popper.js';
import PopoverWrapper from './popoverWrapper';

const mockThirdPartPopoverInstance = {
  destroy: jest.fn(),
};

jest.mock('popper.js', () => jest.fn().mockImplementation(() => mockThirdPartPopoverInstance));

const getReferenceMock = () => 'mock reference';
const getContentMock = () => 'mock content';

const getThirdPartStandardOptions = () => ({
  placement: 'bottom-start',
});
const getOptionsMock = () => ({
  mockOption: 'mockedOption',
});

describe('PopoverWrapper', () => {
  it('should call third part library when instantiate new PopoverWrapper', () => {
    const options = getOptionsMock();
    const popoverInstance = new PopoverWrapper(getReferenceMock(), getContentMock(), options);
    const thirdPartOptions = {
      ...getThirdPartStandardOptions(),
      ...options,
    };
    expect(Popper).toHaveBeenCalledTimes(1);
    expect(Popper).toHaveBeenCalledWith(getReferenceMock(), getContentMock(), thirdPartOptions);
    expect(popoverInstance.instance).toEqual(mockThirdPartPopoverInstance);
  });

  it('should call third part library destroy method when destroy DatepickerWrapper instance', () => {
    const popoverWrapper = new PopoverWrapper(
      getReferenceMock(),
      getContentMock(),
      getOptionsMock(),
    );
    popoverWrapper.destroyPopover();
    expect(mockThirdPartPopoverInstance.destroy).toHaveBeenCalledTimes(1);
  });
});
