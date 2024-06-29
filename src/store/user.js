import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useUserStore = defineStore('user', {
  state: () => ({
    userList: reactive([
      { id: 187226, userName: 'pp', age: 18 },
      { id: 179249, userName: 'ee', age: 26 },
      { id: 205239, userName: 'rayray', age: 18 },
    ]),
  }),
  actions: {
    addUser(user) {
      this.userList.unshift(user);
    },
    deleteUser(index) {
      this.userList.splice(index, 1);
    },
    editUser(index, user) {
      this.userList.splice(index, 1);
      this.userList.unshift(user);
    },
  },
});
