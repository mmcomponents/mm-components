<template>
  <div class="mm-dropdown__container" v-on-click-outside="closeOptions">
    <mm-label> {{ label}} </mm-label>
    <div class="mm-dropdown">
      <mm-icon icon="chevron-down"/>
      <button class="mm-dropdown__trigger-button" @click="toggleOptions()">
        <span>{{ dropdownLabelValue }}</span>
      </button>
      <div class="mm-dropdown-options" v-show="showOptions">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import MmLabel from '../label';
import MmIcon from '../icon';
import onClickOutside from '../../directives/on-click-outside';

export default {
  name: 'mm-dropdown',
  components: { MmIcon, MmLabel },
  directives: {
    onClickOutside,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Selecione um item',
    },
    dropdownTriggerLabel: {
      type: String,
      default: null,
    },
  },
  provide() {
    return {
      selectOption: this.selectOption,
      closeOptions: this.closeOptions,
    };
  },
  data() {
    return {
      selectedOptionLabel: null,
      showOptions: false,
    };
  },
  computed: {
    dropdownLabelValue() {
      if (this.dropdownTriggerLabel !== null) {
        return this.dropdownTriggerLabel;
      }
      return this.selectedOptionLabel || this.placeholder;
    },
  },
  methods: {
    toggleOptions() {
      this.showOptions = !this.showOptions;
      this.$emit('toggle-options', this.showOptions);
    },
    selectOption({ value, label }) {
      this.selectedOptionLabel = label;
      this.$emit('option-selected', value);
    },
    closeOptions() {
      this.showOptions = false;
      this.$emit('dropdown-closed');
    },
  },
};
</script>

<style scoped lang="scss">
  @import "./mm-dropdown.scss";
</style>
