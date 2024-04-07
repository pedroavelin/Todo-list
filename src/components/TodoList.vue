<template>
  <v-text-field
    label="Add Task"
    :rules="rules"
    v-model="taskStore.titleTaskCreating"
    @keyup.enter="taskStore.addTask"
    class="ma-2"
  />
  <ListTasks />
</template>

<script setup>
import ListTasks from "./ListTasks.vue";
import { useTaskStore } from "@/store/task";
const taskStore = useTaskStore();

const rules = [
  value => {
    if (!value || value.length >= 5) return true;
    return "O campo deve ter mais de 5 caracteres";
  },
];
</script>