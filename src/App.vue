<template>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/students">Student List</RouterLink>
      </nav>
      <router-view />
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  nav {
    margin-bottom: 10px;
  }
  </style>
  