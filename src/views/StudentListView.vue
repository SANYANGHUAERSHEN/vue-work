<template>
  <div class="container">
    <h1>Student List</h1>
    <button @click="showForm = true">新增</button>
    <StudentList @edit="editUser" @delete="deleteUser" />
    <StudentForm v-if="showForm" :form="form" @submit="submitForm" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/store/user';
import StudentList from '@/components/StudentList.vue';
import StudentForm from '@/components/StudentForm.vue';

const userStore = useUserStore();
const showForm = ref(false);
const form = ref({
  id: '',
  userName: '',
  age: '',
});
const isEdit = ref(false);
const editIndex = ref(-1);

const submitForm = (user) => {
  // 检查学号是否为数字
  if (!/^\d+$/.test(user.id)) {
    alert('学号必须是数字');
    return;
  }

  // 检查学号是否唯一
  if (!isEdit.value && userStore.userList.some(item => item.id === user.id)) {
    alert('学号必须唯一');
    return;
  }

  // 处理重复姓名
  const existingUsers = userStore.userList.filter(item => item.userName.startsWith(user.userName));
  if (existingUsers.length > 0) {
    const maxSuffix = existingUsers.reduce((max, item) => {
      const suffix = item.userName.match(/\d+$/);
      return suffix ? Math.max(max, parseInt(suffix[0])) : max;
    }, 0);
    user.userName += (maxSuffix + 1);
  }

  if (isEdit.value) {
    userStore.editUser(editIndex.value, user);
  } else {
    userStore.addUser(user);
  }
  resetForm();
};

const resetForm = () => {
  form.value = { id: '', userName: '', age: '' };
  showForm.value = false;
  isEdit.value = false;
  editIndex.value = -1;
};

const editUser = (index, user) => {
  form.value = { ...user };
  isEdit.value = true;
  editIndex.value = index;
  showForm.value = true;
};

const deleteUser = (index) => {
  userStore.deleteUser(index);
};
</script>
