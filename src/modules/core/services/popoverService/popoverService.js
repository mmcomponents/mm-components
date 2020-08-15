import PopoverWrapper from './popoverWrapper';

export const createPopover = (reference, content, options) => new PopoverWrapper(
  reference,
  content,
  options,
);

export const destroyPopover = (popoverInstance) => {
  popoverInstance.destroyPopover();
};
