import onClickOutside from './on-click-outside';

const getElementMock = () => ({
  event: 'mock event',
  contains: () => {},
});

const getTargetElementWithContainsMockTrue = () => ({
  event: 'mock event',
  contains: () => true,
});

const getBindingMock = () => ({
  expression: 'bindFunction',
});
const getVnodeMock = () => ({
  context: {
    bindFunction: jest.fn(),
  },
});

describe('onClickOutside', () => {
  beforeEach(() => {
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();
  });

  it('should bind events', () => {
    onClickOutside.bind(getElementMock());
    expect(document.addEventListener).toHaveBeenCalledTimes(2);
    expect(document.addEventListener.mock.calls[0][0]).toEqual('click');
    expect(document.addEventListener.mock.calls[1][0]).toEqual('touchstart');
  });

  it('should not handle click outside when click occurs on target element', () => {
    const element = getElementMock();
    const binding = getBindingMock();
    const vnode = getVnodeMock();
    onClickOutside.bind(element, binding, vnode);
    element.event(element);
    expect(vnode.context.bindFunction).not.toHaveBeenCalled();
  });

  it('should not handle click outside when click occurs on some element inside target element', () => {
    const element = getTargetElementWithContainsMockTrue();
    const binding = getBindingMock();
    const vnode = getVnodeMock();
    onClickOutside.bind(element, binding, vnode);
    element.event(element);
    expect(vnode.context.bindFunction).not.toHaveBeenCalled();
  });

  it('should handle click outside when click occurs on some element outside target element', () => {
    const element = getElementMock();
    const binding = getBindingMock();
    const vnode = getVnodeMock();
    onClickOutside.bind(element, binding, vnode);
    element.event(getElementMock());
    expect(vnode.context.bindFunction).toHaveBeenCalledTimes(1);
  });

  it('should unbind events', () => {
    onClickOutside.unbind(getElementMock());
    expect(document.removeEventListener).toHaveBeenCalledTimes(2);
    expect(document.removeEventListener.mock.calls[0][0]).toEqual('click');
    expect(document.removeEventListener.mock.calls[0][1]).toEqual(getElementMock().event);

    expect(document.removeEventListener.mock.calls[1][0]).toEqual('touchstart');
    expect(document.removeEventListener.mock.calls[1][1]).toEqual(getElementMock().event);
  });
});
