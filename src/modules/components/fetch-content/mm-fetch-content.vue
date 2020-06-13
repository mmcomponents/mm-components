<template>
  <div>
    <mm-row>
      <mm-col>
        <mm-loader
          v-if="loading"
          size="medium" />
        <slot v-else-if="fetchSuccess" />
      </mm-col>
    </mm-row>
  </div>
</template>

<script>
import MmRow from '../row/mm-row.vue';
import MmCol from '../column/mm-column.vue';
import MmLoader from '../loader/mm-loader.vue';

export default {
  name: 'mm-fetch-content',
  components: { MmLoader, MmCol, MmRow },
  props: {
    onFetch: {
      type: Function,
      required: true,
    },
  },
  mounted() {
    this.fetchContent();
  },
  data() {
    return {
      loading: true,
      fetchSuccess: false,
    };
  },
  methods: {
    async fetchContent() {
      try {
        this.fetchSuccess = false;
        this.loading = true;
        const response = await this.onFetch();
        this.$emit('fetch-success', response);
        this.fetchSuccess = true;
      } catch (e) {
        this.$emit('fetch-error', e);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
