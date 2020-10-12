import Popper from 'popper.js';

const popoverStandardOptions = {
  placement: 'bottom-start',
};

export default class PopoverWrapper {
  constructor(reference, content, options) {
    this.instance = new Popper(
      reference,
      content,
      {
        ...popoverStandardOptions,
        ...options,
      },
    );
  }

  destroyPopover() {
    this.instance.destroy();
  }
}
