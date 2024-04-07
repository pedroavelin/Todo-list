<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogTaskFields" max-width="400" persistent>
      <v-card>
        <v-card-title>Edit task</v-card-title>
        <v-card-text>
          <v-text-field label="Title" v-model="props.task.title"></v-text-field>
          <v-text-field label="Desciption" v-model="props.task.description"></v-text-field>
        </v-card-text>
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn> Cancelar </v-btn>

          <v-btn variant="elevated" @click="taskStore.updatetask()"> OK </v-btn>

        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { useTaskStore } from '@/store/task'
const taskStore = useTaskStore();
const props = defineProps({
  task: Object
});
</script>