import PopoverWrapper from './popoverWrapper';
import { createPopover, destroyPopover } from '.';

jest.mock('./popoverWrapper');

const getReferenceMock = () => 'mock reference';
const getContentMock = () => 'mock content';

const getOptionsMock = () => ({
  mockOption: 'mockedOption',
});
const getPopoverWrapperInstanceMock = () => ({
  destroyPopover: jest.fn(),
  instance: {
    set: jest.fn(),
  },
});

describe('popoverService', () => {
  beforeEach(() => {
    PopoverWrapper.mockClear();
  });

  it('should create a new instance of PopoverWrapper with expected options', () => {
    const referenceMock = getReferenceMock();
    const contentMock = getContentMock();
    const optionsMock = getOptionsMock();
    createPopover(referenceMock, contentMock, optionsMock);
    expect(PopoverWrapper).toHaveBeenCalledTimes(1);
    expect(PopoverWrapper).toHaveBeenCalledWith(referenceMock, contentMock, optionsMock);
    PopoverWrapper.mockClear();
  });

  it('should destroy PopoverWrapper instance', () => {
    const popoverInstanceMock = getPopoverWrapperInstanceMock();
    destroyPopover(popoverInstanceMock);
    expect(popoverInstanceMock.destroyPopover).toHaveBeenCalledTimes(1);
  });
});
