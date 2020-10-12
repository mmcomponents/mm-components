const isClickOnTargetElement = (targetElement, event) => targetElement === event;

const isClickOnDescendentElement = (targetElement, event) => targetElement.contains(event.target);

const isClickOnTarget = (targetElement, event) => isClickOnTargetElement(targetElement, event)
    || isClickOnDescendentElement(targetElement, event);

const buildOnClickOutsideListener = (element, binding, vnode) => {
  const targetElement = element;
  targetElement.event = (event) => {
    if (!isClickOnTarget(targetElement, event)) {
      vnode.context[binding.expression](event);
    }
  };
  return targetElement;
};

export default {
  bind(element, binding, vnode) {
    const elementWithOutsideListener = buildOnClickOutsideListener(element, binding, vnode);
    document.addEventListener('click', elementWithOutsideListener.event);
    document.addEventListener('touchstart', elementWithOutsideListener.event);
  },

  unbind(targetElement) {
    document.removeEventListener('click', targetElement.event);
    document.removeEventListener('touchstart', targetElement.event);
  },
};
