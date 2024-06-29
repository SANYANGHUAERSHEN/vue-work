<template>
    <div>
      <ul>
        <li v-for="(item, index) in userList" :key="item.id">
          <div>
            <span>{{ index + 1 }}.</span>
            <span>学号：{{ item.id }}</span> -
            <span>姓名：{{ item.userName }}</span> -
            <span>年龄：{{ item.age }}</span>
          </div>
          <div>
            <button @click="$emit('delete', index)">删除</button>
            <button @click="$emit('edit', index, item)">编辑</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useUserStore } from '@/store/user';
  
  const userStore = useUserStore();
  const { userList } = userStore;
  </script>
  