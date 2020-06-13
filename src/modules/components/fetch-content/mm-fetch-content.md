```vue
<template>
  <div class="wrapper">
    <mm-fetch-content
      :on-fetch="onFetch"
      @fetch-success="onFetchSuccess">
      <ul>
        <li
          v-for="user in users"
          :key="user.id"> {{ user.name }}</li>
      </ul>
    </mm-fetch-content>
  </div>
</template>

<script>
import MmInput from '../input/mm-input.vue';

export default { 
components: { MmInput } ,
  data() {
    return {
      users: [],
    };
  },
  methods: {
    onFetch() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(this.getUsers());
        }, 3000);
      });
    },
    onFetchSuccess(users) {
      this.users = users;
    },
    getUsers() {
      return [
        { id: '001', name: 'User 001' },
        { id: '002', name: 'User 002' },
        { id: '003', name: 'User 003' },
        { id: '004', name: 'User 004' },
        { id: '005', name: 'User 005' },
        { id: '006', name: 'User 006' },
        { id: '007', name: 'User 007' },
        { id: '008', name: 'User 008' },
        { id: '009', name: 'User 009' },
        { id: '010', name: 'User 010' },
      ];
    },
  },
};
</script>
```
