<template>
  <div>
    <input v-model="localForm.id" placeholder="学号" />
    <input v-model="localForm.userName" placeholder="姓名" />
    <input v-model="localForm.age" placeholder="年龄" />
    <button @click="submit">提交</button>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue';

const props = defineProps(['form']);
const emit = defineEmits(['submit']);
const localForm = reactive({ ...props.form });

watch(
  () => props.form,
  (newForm) => {
    Object.assign(localForm, newForm);
  },
  { deep: true }
);

const submit = () => {
  emit('submit', { ...localForm });
};
</script>
